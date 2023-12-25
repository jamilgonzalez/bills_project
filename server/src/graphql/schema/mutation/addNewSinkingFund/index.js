const { GraphQLNonNull, GraphQLList } = require("graphql");

const SinkingFund = require("../../SinkingFund");

const addNewSinkingFundInput = require("./addNewSinkingFund.input");
const addNewSinkingFundResolver = require("./addNewSinkingFund.resolver");

const addNewSinkingFund = {
  addNewSinkingFund: {
    type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
    args: addNewSinkingFundInput,
    resolve: addNewSinkingFundResolver,
  },
};

module.exports = addNewSinkingFund;
