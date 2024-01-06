const db = require("../../../../db");

async function addNewBillResolver(
  _parent,
  { input },
  { user: { householdId } }
) {
  await db.addBill(householdId, input);

  const { bills } = await db.fetchHousehold(householdId);
  return bills;
}

module.exports = addNewBillResolver;
