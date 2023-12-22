const { Schema } = require("mongoose");

const INCOMES_SCHEMA = new Schema({
  id: String,
  amount: Number,
  frequency: String,
  payDay: String,
  description: String,
});

const BILLS_SCHEMA = new Schema({
  id: String,
  name: String,
  amount: Number,
  dueDate: String,
  payAccount: String,
  frequency: String,
});

const SINKING_FUNDS_SCHEMA = new Schema({
  id: String,
  name: String,
  goal: Number,
  totalSaved: Number,
  frequency: String,
});

module.exports = {
  INCOMES_SCHEMA,
  BILLS_SCHEMA,
  SINKING_FUNDS_SCHEMA,
};
