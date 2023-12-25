const model = require("./bills.model");

async function resolver() {
  return await model.getBills();
}

module.exports = resolver;
