const {
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const frequency = require("../../Frequency");

const AddNewIncomeInput = {
  input: {
    type: new GraphQLInputObjectType({
      name: "IncomeInput",
      fields: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        amount: {
          type: new GraphQLNonNull(GraphQLFloat),
        },
        frequency: {
          type: new GraphQLNonNull(frequency),
        },
        nextPayDay: {
          type: GraphQLString,
        },
      },
    }),
  },
};

module.exports = AddNewIncomeInput;
