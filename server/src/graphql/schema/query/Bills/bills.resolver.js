const db = require("../../../../db");

async function billsResolver() {
  return await db.fetchBills();
}

module.exports = billsResolver;
