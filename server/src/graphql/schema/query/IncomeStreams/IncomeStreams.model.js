const db = require("../../../../db");

async function getIncomeStreams() {
  return await db.fetchIncomes();
}

module.exports = {
  getIncomeStreams,
};
