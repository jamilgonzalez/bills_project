const BILL = {
  id: String,
  name: String,
  amount: Number,
  dueDate: String,
  payAccount: String,
  paymentType: String,
};

const SINKING_FUND = {
  id: String,
  name: String,
  targetAmount: Number,
  totalSaved: Number,
  endDate: String,
};

const PAY_DAY = {
  name: String,
  date: String,
  amount: Number,
};

const BILL_PAY_SESSION = {
  start: String,
  end: String,
  paydays: [PAY_DAY],
  bills: [BILL],
  sinkingFunds: [SINKING_FUND],
};

const BUDGET = {
  billPaySessions: [BILL_PAY_SESSION],
};

module.exports = {
  BILL,
  SINKING_FUND,
  PAY_DAY,
  BILL_PAY_SESSION,
  BUDGET,
};
