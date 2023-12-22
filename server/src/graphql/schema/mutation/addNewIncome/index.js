const { GraphQLNonNull, GraphQLList } = require("graphql");

const addNewIncomeResolver = require("./resolver");
const addNewIncomeInput = require("./input");
const IncomeStream = require("../../IncomeStream");

const addNewIncome = {
  addNewIncome: {
    type: new GraphQLNonNull(new GraphQLList(IncomeStream)),
    args: addNewIncomeInput,
    resolve: addNewIncomeResolver,
  },
};

module.exports = addNewIncome;
