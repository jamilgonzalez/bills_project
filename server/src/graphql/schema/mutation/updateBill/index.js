const { GraphQLNonNull, GraphQLList } = require("graphql");

const Bill = require("../../Bill");

const updateBillResolver = require("./updateBill.resolver");
const updateBillInput = require("./updateBill.input");

const updateBill = {
  updateBill: {
    type: new GraphQLNonNull(new GraphQLList(Bill)),
    args: {
      input: {
        type: updateBillInput,
      },
    },
    resolve: updateBillResolver,
  },
};

module.exports = updateBill;
