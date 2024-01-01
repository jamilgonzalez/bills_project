const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLFloat,
  GraphQLInputObjectType,
} = require("graphql");

const Bill = require("../../Bill");
const SinkingFund = require("../../SinkingFund");

const addBudgetResolver = require("./addBudget.resolver");

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

const BudgetPlan = new GraphQLObjectType({
  name: "BudgetPlan",
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
    },
    sinkingFunds: {
      type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
    },
  },
});

const Budget = new GraphQLObjectType({
  name: "Budget",
  fields: {
    activePlan: {
      type: BudgetPlan,
    },
    archivedPlans: {
      type: new GraphQLNonNull(new GraphQLList(BudgetPlan)),
    },
  },
});

const addBudget = {
  addBudget: {
    type: new GraphQLNonNull(Budget),
  },
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: "AddBudgetInput",
        fields: {
          budget: {
            type: GraphQLNonNull(
              new GraphQLInputObjectType({
                name: "BudgetInput",
                fields: {
                  sessions: {
                    type,
                  },
                },
              })
            ),
          },
        },
      }),
    },
  },
  resolve: addBudgetResolver,
};

module.exports = addBudget;
