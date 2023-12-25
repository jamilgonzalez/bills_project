const db = require("../../../../db");

async function addNewSinkingFund(_parent, { input }) {
  return await db.addSinkingFund(input);
}

module.exports = addNewSinkingFund;
