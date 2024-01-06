const db = require("../../../../db");

async function deleteBillResolver(_parent, { householdId, billId }) {
  await db.deleteBill(householdId, billId);

  const { bills } = await db.fetchHousehold(householdId);
  return bills;
}

module.exports = deleteBillResolver;
