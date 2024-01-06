const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
} = require("graphql");

const addNewSinkingFundInput = {
  input: {
    type: new GraphQLInputObjectType({
      name: "AddNewSinkingFundInput",
      fields: {
        householdId: {
          type: new GraphQLNonNull(GraphQLID),
        },
        sinkingFund: {
          type: new GraphQLInputObjectType({
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
          }),
        },
      },
    }),
  },
};

module.exports = addNewSinkingFundInput;
