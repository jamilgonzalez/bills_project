const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
} = require("graphql");

const SinkingFund = require("../../SinkingFund");

const UpdateSinkingFundResolver = require("./updateSinkingFund.resolver");

const updateSinkingFund = {
  updateSinkingFund: {
    type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "UpdateSinkingFundInput",
          fields: {
            id: {
              type: new GraphQLNonNull(GraphQLID),
            },
            name: {
              type: GraphQLString,
            },
            targetAmount: {
              type: GraphQLFloat,
            },
            totalSaved: {
              type: GraphQLFloat,
            },
            endDate: {
              type: GraphQLString,
            },
          },
        }),
      },
    },
    resolve: UpdateSinkingFundResolver,
  },
};

module.exports = updateSinkingFund;
