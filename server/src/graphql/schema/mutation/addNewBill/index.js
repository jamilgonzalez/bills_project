const {
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
} = require("graphql");

const resolver = require("./resolver");
const Bill = require("../../Bill");

const addNewBillInput = {
  input: {
    type: new GraphQLInputObjectType({
      name: "BillInput",
      fields: {
        dueDate: {
          type: new GraphQLNonNull(GraphQLString),
        },
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        payAccount: {
          type: new GraphQLNonNull(GraphQLString),
        },
        total: {
          type: new GraphQLNonNull(GraphQLFloat),
        },
      },
    }),
  },
};

const addNewBill = {
  addNewBill: {
    type: new GraphQLNonNull(new GraphQLList(Bill)),
    args: addNewBillInput,
    resolve: resolver,
  },
};

module.exports = addNewBill;
