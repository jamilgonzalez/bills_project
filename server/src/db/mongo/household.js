const { model } = require("mongoose");
const { v4 } = require("uuid");

const { HOUSEHOLD_SCHEMA } = require("./schema");

const householdModel = model("Household", HOUSEHOLD_SCHEMA);

async function fetchHousehold(id) {
  try {
    return await householdModel.findOne({ id }, { _id: 0, __v: 0 });
  } catch (error) {
    console.error(`Error fetching household - ${error}`);
    throw Error("Error fetching household");
  }
}

async function createHousehold() {
  try {
    const id = v4();
    await householdModel.create({ id });
    return await fetchHousehold(id);
  } catch (error) {
    console.error(`Error creating household - ${error}`);
    throw Error("Error creating household");
  }
}

async function updateHousehold(id, { field, value }) {
  try {
    const updateOperator = field === "activeBudget" ? "$set" : "$push";
    return await householdModel.updateOne(
      { id },
      { [updateOperator]: { [field]: value } }
    );
  } catch (error) {
    console.error(`Error updating household - ${error}`);
    throw Error("Error updating household");
  }
}

async function addBill(id, bill) {
  try {
    return await householdModel.updateOne({ id }, { $push: { bills: bill } });
  } catch (error) {
    console.error(`Error adding bill to db- ${error}`);
    throw Error("Error adding bill to db");
  }
}

async function updateBill(id, bill) {
  try {
    return await householdModel.updateOne(
      { id, "bills.id": bill.id },
      { $set: { "bills.$": bill } }
    );
  } catch (error) {
    console.error(`Error updating bill to db- ${error}`);
    throw Error("Error updating bill to db");
  }
}

async function addSinkingFund(id, sinkingFund) {
  try {
    return await householdModel.updateOne(
      { id },
      { $push: { sinkingFunds: sinkingFund } }
    );
  } catch (error) {
    console.error(`Error adding sinkingfund in db - ${error}`);
    throw Error("Error adding sinkingfund in db");
  }
}

async function updateSinkingFund(id, sinkingFund) {
  try {
    return await householdModel.updateOne(
      { id, "sinkingFunds.id": sinkingFund.id },
      { $set: { "sinkingFunds.$": sinkingFund } }
    );
  } catch (error) {
    console.error(`Error updating sinking fund in db- ${error}`);
    throw Error("Error updating sinkingfund in db");
  }
}

async function deleteSinkingFund(householdId, sinkingFundId) {
  try {
    await householdModel.updateOne(
      {
        id: householdId,
      },
      { $pull: { sinkingFunds: { id: sinkingFundId } } }
    );
  } catch (error) {
    console.error(`Error deleting sinkingfund from db - ${error}`);
    throw Error("Error deleting sinkingfund from db");
  }
}

async function deleteBill(householdId, billId) {
  try {
    await householdModel.updateOne(
      {
        id: householdId,
      },
      { $pull: { bills: { id: billId } } }
    );
  } catch (error) {
    console.error(`Error deleting bill from db - ${error}`);
    throw Error("Error deleting bill from db");
  }
}

module.exports = {
  createHousehold,
  fetchHousehold,
  updateHousehold,
  addBill,
  addSinkingFund,
  updateBill,
  updateSinkingFund,
  deleteSinkingFund,
  deleteBill,
};
