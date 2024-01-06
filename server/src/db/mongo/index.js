const { model } = require("mongoose");
const { uuid } = require("uuidv4");

const { INCOMES_SCHEMA } = require("./schema");

const { addBill, deleteBill, fetchBills, updateBill } = require("./bills");
const {
  fetchSinkingFunds,
  addSinkingFund,
  deleteSinkingFund,
  updateSinkingFund,
} = require("./sinkingFunds");

const { fetchUser, createUser } = require("./user");

const { addBudget, fetchBudget } = require("./budget");

const {
  createHousehold,
  fetchHousehold,
  updateHousehold,
} = require("./household");

const incomeModel = model("Income", INCOMES_SCHEMA);

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
  addBudget,
  fetchBudget,
  fetchUser,
  createUser,
  createHousehold,
  fetchHousehold,
  updateHousehold,
});
