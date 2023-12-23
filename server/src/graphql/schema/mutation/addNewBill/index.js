const { GraphQLNonNull, GraphQLList } = require("graphql");

const Bill = require("../../Bill");

const addNewBillInput = require("./addNewBill.input");
const addNewBillResolver = require("./addNewBill.resolver");

const addNewBill = {
  addNewBill: {
    type: new GraphQLNonNull(new GraphQLList(Bill)),
    args: addNewBillInput,
    resolve: addNewBillResolver,
  },
};

module.exports = addNewBill;
