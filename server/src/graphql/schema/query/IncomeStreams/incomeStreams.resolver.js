const model = require("./IncomeStreams.model");

async function IncomeStreamResolver() {
  return await model.getIncomeStreams();
}

module.exports = IncomeStreamResolver;
