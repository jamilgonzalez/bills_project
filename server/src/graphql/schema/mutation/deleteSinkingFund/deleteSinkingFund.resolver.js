const db = require("../../../../db");

async function deleteSinkingFundResolver(
  _parent,
  { id },
  { user: { householdId } }
) {
  await db.deleteSinkingFund(householdId, id);
  const { sinkingFunds } = await db.fetchHousehold(householdId);
  return sinkingFunds;
}

module.exports = deleteSinkingFundResolver;
