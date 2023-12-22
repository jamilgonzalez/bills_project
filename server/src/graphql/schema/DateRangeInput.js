const { GraphQLString, GraphQLNonNull } = require("graphql");

const DateRangeInput = {
  startDate: {
    type: new GraphQLNonNull(GraphQLString),
  },
  endDate: {
    type: new GraphQLNonNull(GraphQLString),
  },
};

module.exports = DateRangeInput;
