const db = require("../../../../db");

async function getIncomeStreams() {
  return await db.fetchIncomes();
}

async function updateIncomeStream(updatedIncome) {
  return await db.updateIncomeStream(updatedIncome)
}

module.exports = {
  getIncomeStreams,
  updateIncomeStream
};
