const model = require("./bills.model");

async function BillsResolver() {
  return await model.getBills();
}

module.exports = BillsResolver;
