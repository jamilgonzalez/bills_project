const { GraphQLList, GraphQLNonNull, GraphQLID } = require("graphql");

const deleteSinkingFundResolver = require("./deleteSinkingFund.resolver");
const SinkingFund = require("../../SinkingFund");

const deleteSinkingFund = {
  deleteSinkingFund: {
    type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
    args: {
      householdId: {
        type: new GraphQLNonNull(GraphQLID),
      },
      sinkingFundId: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: deleteSinkingFundResolver,
  },
};

module.exports = deleteSinkingFund;
