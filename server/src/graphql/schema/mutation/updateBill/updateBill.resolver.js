const db = require("../../../../db");

async function updateBillResolver(_parent, { input }) {
  return db.updateBill(input);
}

module.exports = updateBillResolver;
