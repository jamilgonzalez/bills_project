const { GraphQLList, GraphQLNonNull } = require("graphql");

const SinkingFund = require("../../SinkingFund");

const SinkingFundResolver = require("./sinkingFunds.resolver");

const sinkingFunds = {
  sinkingFunds: {
    type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
    resolve: SinkingFundResolver,
  },
};

module.exports = sinkingFunds;
