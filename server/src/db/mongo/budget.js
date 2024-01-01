const { model } = require("mongoose");
const { uuid } = require("uuidv4");

const { BUDGET_SCHEMA } = require("./schema");

const budgetModel = model("Budget", BUDGET_SCHEMA);

async function fetchBudget(id) {
  try {
    return await budgetModel.find({ _id: id }, { _id: 0, __v: 0 });
  } catch (err) {
    console.error(`Error fetching budget - ${err}`);
    throw Error("Error fetching budget");
  }
}

async function addActivePlan(budget) {
  try {
    await budgetModel.create([
      {
        budget: {
          ...budget,
          archivedPlans: [],
          id: uuid(),
        },
      },
    ]);
    return await fetchBudget();
  } catch (error) {
    console.error(`Error adding budget - ${error}`);
    throw Error("Unable to add budget");
  }
}

module.exports = {
  addBudget: addActivePlan,
  fetchBudget,
};
