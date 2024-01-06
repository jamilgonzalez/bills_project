const db = require("../../../../db");

async function addNewSinkingFund(
  _parent,
  { input: { householdId, sinkingFund } }
) {
  await db.addSinkingFund(householdId, sinkingFund);

  const { sinkingFunds } = await db.fetchHousehold(householdId);
  return sinkingFunds;
}

module.exports = addNewSinkingFund;
