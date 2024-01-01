const { Schema } = require("mongoose");

const { BILL, SINKING_FUND, BUDGET } = require("./constants");
const { v4 } = require("uuid");
const { ObjectId } = require("mongodb");

const INCOMES_SCHEMA = new Schema({
  id: String,
  name: String,
  amount: Number,
  frequency: String,
  nextPayDay: String,
});

const BILLS_SCHEMA = new Schema(BILL);

const SINKING_FUNDS_SCHEMA = new Schema(SINKING_FUND);

const BUDGET_SCHEMA = new Schema({
  activeBudget: BUDGET,
  archivedBudgets: [BUDGET],
});

const USER_SCHEMA = new Schema({
  accountId: {
    type: ObjectId,
    default: v4(),
  },
  fullName: String,
  email: String,
  avatar: String,
  householdId: String,
});

const HOUSEHOLD_SCHEMA = new Schema({
  id: {
    type: String,
    default: v4(),
  },
  activeBudget: BUDGET,
  archivedBudgets: {
    type: [BUDGET],
    default: [],
  },
  bills: {
    type: [BILL],
    default: [],
  },
  sinkingFunds: {
    type: [SINKING_FUND],
    default: [],
  },
});

module.exports = {
  INCOMES_SCHEMA,
  BILLS_SCHEMA,
  SINKING_FUNDS_SCHEMA,
  BUDGET_SCHEMA,
  USER_SCHEMA,
  HOUSEHOLD_SCHEMA,
};
