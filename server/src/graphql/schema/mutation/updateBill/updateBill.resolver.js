const db = require("../../../../db");

async function updateBillResolver(_parent, { input: { householdId, bill } }) {
  await db.updateBill(householdId, bill);
  const { bills } = await db.fetchHousehold(householdId);
  return bills;
}

module.exports = updateBillResolver;
