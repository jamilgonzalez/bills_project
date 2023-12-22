const billModel = require("../../query/Bills/bills.model");

async function resolver(_parent, { input }) {
  return billModel.updateBill(input);
}

module.exports = resolver;
