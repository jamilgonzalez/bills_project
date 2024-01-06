const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLID,
} = require("graphql");

const Bill = require("../../Bill");

const updateBillResolver = require("./updateBill.resolver");
const updateBillInput = require("./updateBill.input");

const updateBill = {
  updateBill: {
    type: new GraphQLNonNull(new GraphQLList(Bill)),
    args: {
      input: {
        type: new GraphQLNonNull(updateBillInput),
      },
    },
    resolve: updateBillResolver,
  },
};

module.exports = updateBill;
