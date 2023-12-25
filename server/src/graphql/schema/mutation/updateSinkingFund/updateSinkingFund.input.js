const {
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
} = require("graphql");

const updateSinkingFundInput = new GraphQLInputObjectType({
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
});

module.exports = updateSinkingFundInput;
