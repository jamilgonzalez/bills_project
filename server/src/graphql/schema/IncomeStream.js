const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const frequency = require("./Frequency");

const IncomeStream = new GraphQLObjectType({
  name: "IncomeStream",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    amount: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    frequency: {
      type: new GraphQLNonNull(frequency),
      description: "Cadence of paycheck (ex. weekly, bi-weekly).",
    },
    nextPayDay: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  },
});

module.exports = IncomeStream;
