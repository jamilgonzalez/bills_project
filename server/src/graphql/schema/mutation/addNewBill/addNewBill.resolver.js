const db = require("../../../../db");

async function addNewBillResolver(_parent, { input: { householdId, bill } }) {
  await db.addBill(householdId, bill);

  const { bills } = await db.fetchHousehold(householdId);
  return bills;
}

module.exports = addNewBillResolver;
