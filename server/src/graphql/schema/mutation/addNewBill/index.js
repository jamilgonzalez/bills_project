const { GraphQLNonNull, GraphQLList } = require("graphql");

const Bill = require("../../Bill");

const AddNewBillInput = require("./addNewBill.input");
const addNewBillResolver = require("./addNewBill.resolver");

const addNewBill = {
  addNewBill: {
    type: new GraphQLNonNull(new GraphQLList(Bill)),
    args: {
      input: {
        type: new GraphQLNonNull(AddNewBillInput),
      },
    },
    resolve: addNewBillResolver,
  },
};

module.exports = addNewBill;
