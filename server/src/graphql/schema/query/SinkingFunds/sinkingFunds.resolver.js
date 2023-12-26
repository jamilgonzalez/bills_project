const db = require("../../../../db");

async function sinkingFundsResolver() {
  return await db.fetchSinkingFunds();
}

module.exports = sinkingFundsResolver;
