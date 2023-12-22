const billsModel = require("../Bills/bills.model");

async function BillBreakdownResolver(_parent, { startDate, endDate }) {
  const bills = await billsModel.getBills({ startDate, endDate });

  return {
    startDate,
    endDate,
    bills,
  };
}

module.exports = BillBreakdownResolver;
