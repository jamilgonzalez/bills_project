const { GraphQLEnumType } = require("graphql");

const PaymentStatus = new GraphQLEnumType({
  name: "PaymentStatus",
  values: {
    paid: {
      value: "PAID",
    },
    unpaid: {
      value: "UNPAID",
    },
  },
});

module.exports = PaymentStatus;
