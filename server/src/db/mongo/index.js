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

async function fetchIncomeStreams() {
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
        nextPayDay: new Date(income.nextPayDay).toISOString(),
        id: uuid(),
      },
    ]);
    return await fetchIncomeStreams();
  } catch (error) {
    console.error(`Error adding income - ${error}`);
    throw Error("Unable to add income");
  }
}

async function deleteIncome(id) {
  try {
    await incomeModel.deleteOne({ id });
    return await fetchIncomeStreams();
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

async function fetchSinkingFunds() {
  try {
    return await sinkingFundsModel.find({}, { _id: 0, __v: 0 });
  } catch (error) {
    console.error(`Error fetching sinking funds - ${error}`);
    throw Error("Unable to fetch sinking funds");
  }
}

async function addSinkingFund(sinkingFund) {
  try {
    await sinkingFundsModel.create([{ ...sinkingFund, id: uuid() }]);
    return await fetchSinkingFunds();
  } catch (error) {
    console.error(`Error adding sinking fund - ${error}`);
    throw Error("Unable to add sinking fund");
  }
}

async function deleteSinkingFund(id) {
  try {
    await sinkingFundsModel.deleteOne({ id });
    return await fetchSinkingFunds();
  } catch (error) {
    console.error(`Error deleting sinking fund - ${error}`);
    throw Error("Unable to delete sinking fund");
  }
}

async function updateSinkingFund(updatedSinkingFund) {
  try {
    await sinkingFundsModel.updateOne(
      { id: updatedSinkingFund.id },
      updatedSinkingFund
    );
    return await fetchSinkingFunds();
  } catch (error) {
    console.error(
      `Error updating sinking fund with id ${updatedSinkingFund.id}`
    );
    throw Error("Unable to update sinking fund");
  }
}

async function updateIncomeStream(updatedIncomeStream) {
  try {
    await incomeModel.updateOne(
      { id: updatedIncomeStream.id },
      updatedIncomeStream
    );
    return await fetchIncomeStreams();
  } catch (error) {
    console.error(
      `Error updating income stream with id ${updatedIncomeStream.id}`
    );
    throw Error("Unable to update income stream");
  }
}

module.exports = Object.freeze({
  addIncome,
  deleteIncome,
  fetchIncomeStreams,
  addBill,
  deleteBill,
  fetchBills,
  updateBill,
  fetchSinkingFunds,
  addSinkingFund,
  deleteSinkingFund,
  updateSinkingFund,
  updateIncomeStream,
});
