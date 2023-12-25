const { GraphQLList, GraphQLNonNull, GraphQLID } = require("graphql");

const DeleteSinkingFundResolver = require("./deleteSinkingFund.resolver");
const SinkingFund = require("../../SinkingFund");

const deleteSinkingFund = {
  deleteSinkingFund: {
    type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: DeleteSinkingFundResolver,
  },
};

module.exports = deleteSinkingFund;
