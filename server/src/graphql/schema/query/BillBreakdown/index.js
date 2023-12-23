const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLString,
} = require("graphql");

const Bill = require("../../Bill");

const BillBreakdownInput = require("./billBreakdown.input");
const BillBreakdownResolver = require("./billBreakdown.resolver");

const PayAccount = require("./PayAccount");
const payAccountResolver = require("./PayAccount/payAccount.resolver");

const BillBreakdown = new GraphQLObjectType({
  name: "BillBreakdown",
  fields: {
    startDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    totalAmount: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: ({ bills }) => {
        return bills.reduce((acc, bill) => acc + bill.amount, 0);
      },
    },
    payAccounts: {
      type: new GraphQLNonNull(new GraphQLList(PayAccount)),
      resolve: payAccountResolver,
    },
    // TODO: add upcoming due dates based on date range and the bills current due date
    bills: {
      type: new GraphQLNonNull(new GraphQLList(Bill)),
    },
  },
});

module.exports = {
  billBreakdown: {
    type: new GraphQLNonNull(BillBreakdown),
    args: BillBreakdownInput,
    resolve: BillBreakdownResolver,
  },
};
