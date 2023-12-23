const db = require("../../../../db");

async function resolver(_parent, { id }) {
  return await db.deleteBill(id);
}

module.exports = resolver;
