const { format } = require("date-fns");

const incomesModel = require("../IncomeStreams/IncomeStreams.model");
const billsModel = require("../Bills/bills.model");

async function getBillsInDateRange(startDate, endDate) {
  const [bills, incomes] = await Promise.all([
    billsModel.getBills({ startDate, endDate }),
    incomesModel.getIncomeStreams(),
  ]);
}

module.exports = getBillsInDateRange;
