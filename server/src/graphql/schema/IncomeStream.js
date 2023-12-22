const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const Frequency = require("./Frequency");

const IncomeStream = new GraphQLObjectType({
  name: "IncomeStream",
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

module.exports = IncomeStream;
