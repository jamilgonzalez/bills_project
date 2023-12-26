const { GraphQLList, GraphQLNonNull } = require("graphql");

const SinkingFund = require("../../SinkingFund");

const sinkingFundResolver = require("./sinkingFunds.resolver");

const sinkingFunds = {
  sinkingFunds: {
    type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
    resolve: sinkingFundResolver,
  },
};

module.exports = sinkingFunds;
