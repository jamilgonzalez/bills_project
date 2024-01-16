const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLFloat,
  GraphQLEnumType,
} = require("graphql");
const householdResolver = require("./household.resolver");
const SinkingFund = require("../../SinkingFund");
const Bill = require("../../Bill");
const User = require("../../User");
const db = require("../../../../db");

const PayDay = new GraphQLObjectType({
  name: "PayDay",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    date: {
      type: new GraphQLNonNull(GraphQLString),
    },
    amount: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  },
});

const Budget = new GraphQLObjectType({
  name: "Budget",
  fields: {
    start: {
      type: new GraphQLNonNull(GraphQLString),
    },
    end: {
      type: new GraphQLNonNull(GraphQLString),
    },
    payDays: {
      type: new GraphQLNonNull(new GraphQLList(PayDay)),
    },
    bills: {
      type: new GraphQLNonNull(new GraphQLList(Bill)),
      description:
        "bills that have a due date that falls between the start and end date of this session",
    },
    sinkingFunds: {
      type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
      description:
        "sinking funds that will be contributed to in between the start and end date of this session",
    },
  },
});

const Role = new GraphQLEnumType({
  name: "Role",
  values: {
    admin: {
      value: "admin",
    },
    contributor: {
      value: "contributor",
    },
  },
});

const Member = new GraphQLObjectType({
  name: "Member",
  fields: {
    accountId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    avatar: {
      type: new GraphQLNonNull(GraphQLString),
    },
    role: {
      type: new GraphQLNonNull(Role),
    },
  },
});

const Household = new GraphQLObjectType({
  name: "Household",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    activeBudget: {
      type: Budget,
    },
    archivedBudgets: {
      type: new GraphQLNonNull(new GraphQLList(Budget)),
    },
    bills: {
      type: new GraphQLNonNull(new GraphQLList(Bill)),
    },
    sinkingFunds: {
      type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
    },
    members: {
      type: new GraphQLNonNull(new GraphQLList(Member)),
      resolve: async ({ members }) => {
        return await Promise.all(
          members.map((member) => db.fetchUserByAccountId(member.accountId))
        );
      },
    },
  },
});

const householdQuery = {
  household: {
    type: new GraphQLNonNull(Household),
    resolve: householdResolver,
  },
};

module.exports = householdQuery;
