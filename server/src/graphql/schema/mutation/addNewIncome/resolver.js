const { GraphQLError } = require("graphql");

const db = require("../../../../db");

async function addNewIncomeResolver(_parent, { input: income }) {
  if (income) {
    return await db.addIncome(income);
  } else {
    throw new GraphQLError("Required fields missing");
  }
}

module.exports = addNewIncomeResolver;
