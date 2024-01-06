const db = require("../../../../db");

async function updateSinkingFundResolver(
  _partner,
  { input: { householdId, sinkingFund } }
) {
  await db.updateSinkingFund(householdId, sinkingFund);
  const { sinkingFunds } = await db.fetchHousehold(householdId);
  return sinkingFunds;
}

module.exports = updateSinkingFundResolver;
