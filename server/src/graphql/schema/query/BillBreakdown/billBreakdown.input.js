const { GraphQLNonNull, GraphQLString } = require("graphql");

const billBreakdownInput = {
  startDate: {
    type: new GraphQLNonNull(GraphQLString),
  },
  endDate: {
    type: new GraphQLNonNull(GraphQLString),
  },
};

module.exports = billBreakdownInput;
