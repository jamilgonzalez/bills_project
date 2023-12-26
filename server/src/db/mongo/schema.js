const { Schema } = require("mongoose");

const INCOMES_SCHEMA = new Schema({
  id: String,
  name: String,
  amount: Number,
  frequency: String,
  nextPayDay: String,
});

const BILLS_SCHEMA = new Schema({
  id: String,
  name: String,
  amount: Number,
  dueDate: String,
  payAccount: String,
  paymentType: String,
});

const SINKING_FUNDS_SCHEMA = new Schema({
  id: String,
  name: String,
  targetAmount: Number,
  totalSaved: Number,
  endDate: String,
});

module.exports = {
  INCOMES_SCHEMA,
  BILLS_SCHEMA,
  SINKING_FUNDS_SCHEMA,
};
