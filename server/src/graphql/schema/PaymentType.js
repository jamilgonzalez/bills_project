const { GraphQLEnumType } = require("graphql");

const PaymentType = new GraphQLEnumType({
  name: "PaymentType",
  values: {
    autoPay: {
      value: "AUTOPAY",
    },
    manual: {
      value: "MANUAL",
    },
  },
});

module.exports = PaymentType;
