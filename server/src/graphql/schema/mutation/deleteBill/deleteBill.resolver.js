const db = require("../../../../db");

async function deleteBillResolver(_parent, { id }, { user: { householdId } }) {
  await db.deleteBill(householdId, id);

  const { bills } = await db.fetchHousehold(householdId);
  return bills;
}

module.exports = deleteBillResolver;
