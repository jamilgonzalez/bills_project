const { GraphQLError } = require("graphql");

const db = require("../../../../db");

function resolver(_parent, { input }) {
  if (input) {
    return db.addBill(input);
  } else {
    throw new GraphQLError("Required fields missing");
  }
}

module.exports = resolver;
