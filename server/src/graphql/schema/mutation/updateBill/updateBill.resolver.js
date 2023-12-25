const billModel = require("../../query/Bills/bills.model");

async function updateBillResolver(_parent, { input }) {
  return billModel.updateBill(input);
}

module.exports = updateBillResolver;
