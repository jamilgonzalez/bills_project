const db = require("../../../../db");

async function resolver(_partner, { input }) {
  return await db.updateSinkingFund(input);
}

module.exports = resolver;
