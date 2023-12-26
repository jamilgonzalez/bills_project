const { differenceInWeeks, isWithinInterval } = require("date-fns");

const db = require("../../../../db");

const FREQUENCY_MAP = {
  WEEKLY: 1,
  BIWEEKLY: 2,
  MONTHLY: 4,
  QUARTERLY: 12,
  YEARLY: 52,
};

async function incomeBreakdownResolver(_parent, { startDate, endDate }) {
  const [incomes, bills] = await Promise.all([
    db.fetchIncomeStreams(),
    db.fetchBills(),
  ]);

  // const numWeeks =
  //   differenceInWeeks(new Date(endDate), new Date(startDate)) + 1;

  // const billsInDateRange = bills.filter(({ dueDate }) => {
  //   return isWithinInterval(new Date(dueDate), {
  //     start: new Date(startDate),
  //     end: new Date(endDate),
  //   });
  // });

  // const totalBills = billsInDateRange.reduce((acc, bill) => {
  //   const numPayPeriods = Math.floor(numWeeks / FREQUENCY_MAP[bill.frequency]);
  //   if (numPayPeriods > 0) {
  //     return acc + bill.amount * numPayPeriods;
  //   }
  //   return acc + bill.amount;
  // }, 0);

  // return {
  //   netIncome,
  //   remainingIncome: netIncome - totalBills,
  //   streams: incomes,
  // };
  return {
    bills,
    incomes,
    period: {
      startDate,
      endDate,
    },
  };
}

module.exports = incomeBreakdownResolver;
