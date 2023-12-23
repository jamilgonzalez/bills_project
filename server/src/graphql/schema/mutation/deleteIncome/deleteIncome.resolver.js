const db = require("../../../../db");

async function deleteIncomeResolver(_parent, { id }) {
  return await db.deleteIncome(id);
}

module.exports = deleteIncomeResolver;
