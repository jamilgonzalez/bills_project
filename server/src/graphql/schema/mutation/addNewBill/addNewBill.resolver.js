const db = require("../../../../db");

async function addNewBillResolver(_parent, { input }) {
  return await db.addBill(input);
}

module.exports = addNewBillResolver;
