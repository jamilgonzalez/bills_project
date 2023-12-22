const { model } = require("mongoose");
const { uuid } = require("uuidv4");

const {
  INCOMES_SCHEMA,
  BILLS_SCHEMA,
  SINKING_FUNDS_SCHEMA,
} = require("./schema");

const incomeModel = model("Income", INCOMES_SCHEMA);
const billsModel = model("Bill", BILLS_SCHEMA);
const sinkingFundsModel = model("SinkingFund", SINKING_FUNDS_SCHEMA);

async function fetchIncomes() {
  try {
    return await incomeModel.find({}, { _id: 0, __v: 0 });
  } catch (err) {
    console.error(`Error fetching incomes - ${err}`);
    throw Error("Error fetching incomes");
  }
}

async function addIncome(income) {
  try {
    await incomeModel.create([
      {
        ...income,
        dueDate: new Date(income.dueDate).toISOString(),
        id: uuid(),
      },
    ]);
    return await fetchIncomes();
  } catch (error) {
    console.error(`Error adding income - ${error}`);
    throw Error("Unable to add income");
  }
}

async function deleteIncome(id) {
  try {
    await incomeModel.deleteOne({ id });
    return await fetchIncomes();
  } catch (error) {
    console.error(`Error deleting income - ${error}`);
    throw Error("Unable to delete income");
  }
}

async function fetchBills(billFilter) {
  try {
    let filter = {};
    if (billFilter) {
      const { startDate, endDate } = billFilter;
      filter = {
        dueDate: {
          $gte: new Date(startDate).toISOString(),
          $lte: new Date(endDate).toISOString(),
        },
      };
    }
    const bills = await billsModel.find(filter, { _id: 0, __v: 0 });
    return bills.map((bill) => bill._doc);
  } catch (error) {
    console.error(`Error fetching bills - ${error}`);
    throw Error("Unable to fetch bills");
  }
}

async function addBill(bill) {
  try {
    await billsModel.create([{ ...bill, id: uuid() }]);
    return await fetchBills();
  } catch (error) {
    console.error(`Error adding bill - ${error}`);
    throw Error("Unable to add bill");
  }
}

async function deleteBill(id) {
  try {
    await billsModel.deleteOne({ id });
    return await fetchBills();
  } catch (error) {
    console.error(`Error deleting bill - ${error}`);
    throw Error("Unable to delete bill");
  }
}

async function updateBill(updatedBill) {
  try {
    await billsModel.updateOne({ id: updatedBill.id }, updatedBill);
    return await fetchBills();
  } catch (error) {
    console.error(`Error updating bill with id ${updateBill.id}`);
    throw Error("Unable to update bill");
  }
}

module.exports = Object.freeze({
  addIncome,
  deleteIncome,
  fetchIncomes,
  addBill,
  deleteBill,
  fetchBills,
  updateBill,
});
