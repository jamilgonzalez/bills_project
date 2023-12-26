const db = require("../../../../db");

async function resolver(_parent, { input }) {
  return await db.updateIncomeStream(input);
}

module.exports = resolver;
