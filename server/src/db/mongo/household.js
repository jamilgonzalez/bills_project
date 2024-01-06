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

module.exports = {
  createHousehold,
  fetchHousehold,
  updateHousehold,
};
