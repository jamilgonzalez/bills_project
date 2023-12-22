const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
} = require("graphql");

const UpdateincomeResolver = require("./updateIncome.resolver");
const IncomeStream = require("../../IncomeStream");
const Frequency = require("../../Frequency");

const UpdateIncomeInput = new GraphQLInputObjectType({
  name: "UpdateIncomeInput",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    amount: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    frequency: {
      type: new GraphQLNonNull(Frequency),
      description: "Cadence of paycheck (ex. weekly, bi-weekly).",
    },
    nextPayDay: {
      type: GraphQLString,
    },
  },
});

const UpdateIncome = {
  updateIncome: {
    type: new GraphQLNonNull(new GraphQLList(IncomeStream)),
    args: {
      input: {
        type: UpdateIncomeInput,
      },
    },
    resolve: UpdateincomeResolver,
  },
};

module.exports = UpdateIncome;
