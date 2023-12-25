const db = require("../../../../db");

async function updateSinkingFundResolver(_partner, { input }) {
  return await db.updateSinkingFund(input);
}

module.exports = updateSinkingFundResolver;
