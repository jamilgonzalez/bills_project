const db = require("../../../../db");

async function addNewIncomeResolver(_parent, { input: income }) {
  return await db.addIncome(income);
}

module.exports = addNewIncomeResolver;
