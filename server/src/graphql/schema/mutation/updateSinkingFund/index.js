const { GraphQLList, GraphQLNonNull } = require("graphql");

const SinkingFund = require("../../SinkingFund");

const updateSinkingFundResolver = require("./updateSinkingFund.resolver");
const updateSinkingFundInput = require("./updateSinkingFund.input");

const updateSinkingFund = {
  updateSinkingFund: {
    type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
    args: {
      input: {
        type: new GraphQLNonNull(updateSinkingFundInput),
      },
    },
    resolve: updateSinkingFundResolver,
  },
};

module.exports = updateSinkingFund;
