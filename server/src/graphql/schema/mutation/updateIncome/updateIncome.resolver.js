const incomeModel = require("../../query/IncomeStreams/IncomeStreams.model");

async function resolver(_parent, { input }) {
  return await incomeModel.updateIncomeStream(input);
}

module.exports = resolver;
