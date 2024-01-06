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
      type: new GraphQLNonNull(GraphQLString),
    },
    targetAmount: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    totalSaved: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = updateSinkingFundInput;
