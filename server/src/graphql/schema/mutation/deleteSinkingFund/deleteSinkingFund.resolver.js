const db = require("../../../../db");

async function deleteSinkingFundResolver(_parent, { id }) {
  return db.deleteSinkingFund(id);
}

module.exports = deleteSinkingFundResolver;
