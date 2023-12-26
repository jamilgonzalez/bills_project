const { GraphQLNonNull, GraphQLList } = require("graphql");

const IncomeStream = require("../../IncomeStream");

const AddNewIncomeInput = require("./addNewIncome.input");
const addNewIncomeResolver = require("./addNewIncome.resolver");

const addNewIncome = {
  addNewIncome: {
    type: new GraphQLNonNull(new GraphQLList(IncomeStream)),
    args: AddNewIncomeInput,
    resolve: addNewIncomeResolver,
  },
};

module.exports = addNewIncome;
