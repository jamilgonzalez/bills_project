const db = require("../../../../db");

async function Resolver(_parent, { input }) {
  return await db.addSinkingFund(input);
}

module.exports = Resolver;
