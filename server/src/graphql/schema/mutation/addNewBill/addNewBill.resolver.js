const db = require("../../../../db");

async function resolver(_parent, { input }) {
  return await db.addBill(input);
}

module.exports = resolver;
