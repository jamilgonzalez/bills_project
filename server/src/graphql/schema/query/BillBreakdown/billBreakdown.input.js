const { GraphQLNonNull, GraphQLString } = require("graphql");

const BillBreakdownInput = {
  startDate: {
    type: new GraphQLNonNull(GraphQLString),
  },
  endDate: {
    type: new GraphQLNonNull(GraphQLString),
  },
};

module.exports = BillBreakdownInput;
