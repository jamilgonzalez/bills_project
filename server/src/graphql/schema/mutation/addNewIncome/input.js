const {
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");
const frequency = require("../../Frequency");

const addNewIncomeInput = {
  input: {
    type: new GraphQLInputObjectType({
      name: "IncomeInput",
      fields: {
        amount: {
          type: new GraphQLNonNull(GraphQLFloat),
        },
        frequency: {
          type: new GraphQLNonNull(frequency),
        },
        payDay: {
          type: GraphQLString,
          description: "The day the paycheck comes in (ex. Friday).",
        },
        description: {
          type: GraphQLString,
        },
      },
    }),
  },
};

module.exports = addNewIncomeInput;
