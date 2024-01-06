const { v4 } = require("uuid");

const BILL = {
  id: {
    type: String,
    default: v4(),
  },
  name: String,
  amount: Number,
  dueDate: String,
  payAccount: String,
  frequency: String,
  paymentType: String,
};

const SINKING_FUND = {
  id: {
    type: String,
    default: v4(),
  },
  name: String,
  targetAmount: Number,
  totalSaved: Number,
  endDate: String,
};

const PAY_DAY = {
  id: {
    type: String,
    default: v4(),
  },
  name: String,
  date: String,
  amount: Number,
};

const BUDGET = {
  id: {
    type: String,
    default: v4(),
  },
  start: String,
  end: String,
  paydays: [PAY_DAY],
  bills: [BILL],
  sinkingFunds: [SINKING_FUND],
};

module.exports = {
  BILL,
  SINKING_FUND,
  PAY_DAY,
  BUDGET,
};
