const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
} = require("graphql");

const addNewSinkingFundInput = new GraphQLInputObjectType({
  name: "SinkingFundInput",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    targetAmount: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    totalSaved: {
      type: GraphQLFloat,
    },
    endDate: {
      type: GraphQLString,
    },
  },
});

module.exports = addNewSinkingFundInput;
