const db = require("../../../../db");

async function resolver(_parent, { id }) {
  return db.deleteSinkingFund(id);
}

module.exports = resolver;
