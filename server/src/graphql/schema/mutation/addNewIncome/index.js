const { GraphQLNonNull, GraphQLList } = require("graphql");

const IncomeStream = require("../../IncomeStream");

const addNewIncomeInput = require("./addNewIncome.input");
const addNewIncomeResolver = require("./addNewIncome.resolver");

const addNewIncome = {
  addNewIncome: {
    type: new GraphQLNonNull(new GraphQLList(IncomeStream)),
    args: addNewIncomeInput,
    resolve: addNewIncomeResolver,
  },
};

module.exports = addNewIncome;
