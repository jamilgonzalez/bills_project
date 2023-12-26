const db = require("../../../../db");

async function incomeStreamResolver() {
  return await db.fetchIncomeStreams();
}

module.exports = incomeStreamResolver;
