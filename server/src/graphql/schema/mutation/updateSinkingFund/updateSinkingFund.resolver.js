const db = require("../../../../db");

async function updateSinkingFundResolver(
  _partner,
  { input },
  { user: { householdId } }
) {
  await db.updateSinkingFund(householdId, input);
  const { sinkingFunds } = await db.fetchHousehold(householdId);
  return sinkingFunds;
}

module.exports = updateSinkingFundResolver;
