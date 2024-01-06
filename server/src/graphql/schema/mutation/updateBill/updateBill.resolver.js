const db = require("../../../../db");

async function updateBillResolver(
  _parent,
  { input },
  { user: { householdId } }
) {
  await db.updateBill(householdId, input);
  const { bills } = await db.fetchHousehold(householdId);
  return bills;
}

module.exports = updateBillResolver;
