const db = require("../../../../db");

async function addNewSinkingFund(
  _parent,
  { input },
  { user: { householdId } }
) {
  await db.addSinkingFund(householdId, input);

  const { sinkingFunds } = await db.fetchHousehold(householdId);
  return sinkingFunds;
}

module.exports = addNewSinkingFund;
