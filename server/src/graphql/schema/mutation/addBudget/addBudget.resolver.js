const db = require("../../../../db");

async function addBudgetResolver() {
  return await db.addBudget();
}

module.exports = addBudgetResolver;
