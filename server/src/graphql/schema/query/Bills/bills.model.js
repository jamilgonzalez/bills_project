const db = require("../../../../db");

async function getBills(filter = undefined) {
  return await db.fetchBills(filter);
}

async function updateBill(bill) {
  return await db.updateBill(bill);
}

module.exports = {
  getBills,
  updateBill,
};
