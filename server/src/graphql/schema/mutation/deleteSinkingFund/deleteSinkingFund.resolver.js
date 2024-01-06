const db = require("../../../../db");

async function deleteSinkingFundResolver(
  _parent,
  { householdId, sinkingFundId }
) {
  await db.deleteSinkingFund(householdId, sinkingFundId);
  const { sinkingFunds } = await db.fetchHousehold(householdId);
  return sinkingFunds;
}

module.exports = deleteSinkingFundResolver;
