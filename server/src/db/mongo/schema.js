const { Schema } = require("mongoose");

const { BILL, SINKING_FUND, BUDGET } = require("./constants");
const { v4 } = require("uuid");

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
    type: String,
    default: v4(),
  },
  name: String,
  email: String,
  avatar: String,
  householdId: String,
  role: String,
});

const HOUSEHOLD_SCHEMA = new Schema({
  id: String,
  activeBudget: {
    type: BUDGET,
    default: undefined,
  },
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

const INVITE_SCHEMA = new Schema({
  email: String,
  houseHoldId: String,
});

module.exports = {
  INCOMES_SCHEMA,
  BILLS_SCHEMA,
  SINKING_FUNDS_SCHEMA,
  BUDGET_SCHEMA,
  USER_SCHEMA,
  HOUSEHOLD_SCHEMA,
  INVITE_SCHEMA,
};
