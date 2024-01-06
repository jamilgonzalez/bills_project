const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLID,
} = require("graphql");

const SinkingFund = require("../../SinkingFund");

const updateSinkingFundResolver = require("./updateSinkingFund.resolver");
const updateSinkingFundInput = require("./updateSinkingFund.input");

const updateSinkingFund = {
  updateSinkingFund: {
    type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "UpdateSinkingFundMutation",
          fields: {
            householdId: {
              type: new GraphQLNonNull(GraphQLID),
            },
            sinkingFund: {
              type: new GraphQLNonNull(updateSinkingFundInput),
            },
          },
        }),
      },
    },
    resolve: updateSinkingFundResolver,
  },
};

module.exports = updateSinkingFund;
