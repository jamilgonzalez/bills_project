const db = require("../../../../db");

async function billBreakdownResolver(_parent, { startDate, endDate }) {
  const bills = await db.fetchBills({ startDate, endDate });

  return {
    startDate,
    endDate,
    bills,
  };
}

module.exports = billBreakdownResolver;
