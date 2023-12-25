const db = require("../../../../db");

async function deleteBillResolver(_parent, { id }) {
  return await db.deleteBill(id);
}

module.exports = deleteBillResolver;
