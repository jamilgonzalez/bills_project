const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
} = require("graphql");

const Frequency = require("../../Frequency");

const updateIncomeInput = new GraphQLInputObjectType({
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

module.exports = updateIncomeInput;
