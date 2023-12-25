const db = require("../../../../db");

async function Resolver() {
  return await db.fetchSinkingFunds();
}

module.exports = Resolver;
