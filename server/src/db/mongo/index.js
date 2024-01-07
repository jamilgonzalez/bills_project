const { addBudget, fetchBudget } = require("./budget");

const {
  createHousehold,
  fetchHousehold,
  updateHousehold,
  addBill,
  addSinkingFund,
  updateBill,
  updateSinkingFund,
  deleteBill,
  deleteSinkingFund,
} = require("./household");

const { createInvite, fetchInvite } = require("./invite");

const { createUser, fetchUser } = require("./user");

module.exports = Object.freeze({
  createHousehold,
  fetchHousehold,
  updateHousehold,
  addBill,
  addSinkingFund,
  updateBill,
  updateSinkingFund,
  deleteBill,
  deleteSinkingFund,
  createInvite,
  fetchInvite,
  addBudget,
  fetchBudget,
  createUser,
  fetchUser,
});
