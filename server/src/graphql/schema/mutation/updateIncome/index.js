const { GraphQLNonNull, GraphQLList } = require("graphql");

const IncomeStream = require("../../IncomeStream");

const updateincomeResolver = require("./updateIncome.resolver");
const updateIncomeInput = require("./updateIncome.input");

const updateIncome = {
  updateIncome: {
    type: new GraphQLNonNull(new GraphQLList(IncomeStream)),
    args: {
      input: {
        type: updateIncomeInput,
      },
    },
    resolve: updateincomeResolver,
  },
};

module.exports = updateIncome;
