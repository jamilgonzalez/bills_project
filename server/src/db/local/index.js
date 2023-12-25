const { isWithinInterval } = require("date-fns");
const { uuid } = require("uuidv4");

const budget = {
  incomes: [
    {
      id: "cb4876a3-b7cf-4823-9b09-accebd46aac0",
      amount: 1658.16,
      frequency: "WEEKLY",
      nextPayDay: "2023-12-21",
      name: "Disney Streaming - local",
    },
    {
      id: "35d817b8-63be-4dc4-a7e3-7dfbc3cff361",
      amount: 165.92,
      frequency: "MONTHLY",
      nextPayDay: "2024-01-01",
      name: "VA - local",
    },
  ],
  bills: [
    {
      id: "75eba29a-3eee-4b07-81ae-1188f199e9c8",
      name: "Mortgage",
      amount: 2100.09,
      dueDate: "2024-01-01",
      payAccount: "bills",
      frequency: "MONTHLY",
      paymentStatus: "UNPAID",
    },
    {
      id: "ba10d2bb-6066-4d8e-aaf1-90ceb5447219",
      name: "Tacoma",
      amount: 579.1,
      dueDate: "2023-12-15",
      payAccount: "main",
      frequency: "MONTHLY",
      paymentStatus: "UNPAID",
    },
    {
      id: "ba10d2bb-6066-4d8e-aaf1-90ceb5447218",
      name: "OUC Electric",
      amount: 130.75,
      dueDate: "2023-12-15",
      payAccount: "bills",
      frequency: "MONTHLY",
      paymentStatus: "UNPAID",
    },
  ],
  sinkingFunds: [
    {
      id: "c3492840-a788-4e5c-8a38-6dc19d044962",
      name: "Mortgage",
      targetAmount: 2100.7,
      totalSaved: 1070.81,
      percentComplete: 0,
      transactions: [],
      endDate: "2024-02-01",
    },
  ],
};

async function addSinkingFund(sinkingFund) {
  return new Promise((resolve) => {
    budget.sinkingFunds.push({
      ...sinkingFund,
      id: uuid(),
      transactions: [],
    });
    return resolve(budget.sinkingFunds);
  });
}

async function addIncome(income) {
  return new Promise((resolve) => {
    budget.incomes.push({ ...income, id: uuid() });
    return resolve(budget.incomes);
  });
}

async function deleteIncome(id) {
  return new Promise((resolve) => {
    budget.incomes = budget.incomes.filter((income) => income.id !== id);
    return resolve(budget.incomes);
  });
}

async function fetchIncomes() {
  return new Promise((resolve) => {
    return resolve(budget.incomes);
  });
}

async function updateIncomeStream(updatedIncome) {
  return new Promise((resolve) => {
    budget.incomes = budget.incomes.map((income) => {
      if (income.id === updatedIncome.id) {
        return updatedIncome;
      } else {
        return income;
      }
    });

    return resolve(budget.incomes);
  });
}

async function fetchBills(billFilter) {
  return new Promise((resolve) => {
    let res = budget.bills;
    if (billFilter) {
      const { startDate, endDate } = billFilter;
      res = budget.bills.filter((bill) =>
        isWithinInterval(new Date(bill.dueDate), {
          start: new Date(startDate),
          end: new Date(endDate),
        })
      );
    }
    return resolve(res);
  });
}

async function addBill(bill) {
  return new Promise((resolve) => {
    budget.bills.push({ ...bill, id: uuid() });
    return resolve(budget.bills);
  });
}

async function deleteBill(id) {
  return new Promise((resolve) => {
    budget.bills = budget.bills.filter((bill) => bill.id !== id);
    return resolve(budget.bills);
  });
}

async function updateBill(updatedBill) {
  return new Promise((resolve) => {
    budget.bills = budget.bills.map((bill) => {
      if (bill.id === updatedBill.id) {
        return updatedBill;
      }
      return bill;
    });
    return resolve(budget.bills);
  });
}

module.exports = {
  addBill,
  addIncome,
  addSinkingFund,
  deleteBill,
  deleteIncome,
  fetchBilßls,
  fetchIncomes,
  updateBill,
  updateIncomeStream,
};
