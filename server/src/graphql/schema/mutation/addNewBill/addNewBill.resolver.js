const db = require("../../../../db");

async function addNewBillResolver(_parent, { input: { householdId, bill } }) {
  await db.updateHousehold(householdId, {
    field: "bills",
    value: bill,
  });

  return (await db.fetchHousehold(householdId)).bills;
}

module.exports = addNewBillResolver;
