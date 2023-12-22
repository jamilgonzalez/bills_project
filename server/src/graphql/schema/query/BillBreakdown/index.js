const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLString,
} = require("graphql");

const Bill = require("../../Bill");
const BillBreakdownResolver = require("./billBreakdown.resolver");

const PayAccount = new GraphQLObjectType({
  name: "PayAccount",
  fields: {
    payAccount: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLFloat,
    },
  },
});

const BillBreakdownType = new GraphQLObjectType({
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
      resolve: ({ bills }) => {
        const payAccountMap = new Map();

        bills.forEach((bill) => {
          const payAccountSum = payAccountMap.get(bill.payAccount);
          if (payAccountSum) {
            payAccountMap.set(bill.payAccount, payAccountSum + bill.amount);
          } else {
            payAccountMap.set(bill.payAccount, bill.amount);
          }
        });

        return Array.from(payAccountMap.entries()).map(
          ([payAccount, amount]) => ({ payAccount, amount })
        );
      },
    },
    // TODO: add upcoming due dates based on date range and the bills current due date
    bills: {
      type: new GraphQLNonNull(new GraphQLList(Bill)),
    },
  },
});

const BillBreakdownInput = {
  startDate: {
    type: new GraphQLNonNull(GraphQLString),
  },
  endDate: {
    type: new GraphQLNonNull(GraphQLString),
  },
};

const BillBreakdown = {
  billBreakdown: {
    type: new GraphQLNonNull(BillBreakdownType),
    args: BillBreakdownInput,
    resolve: BillBreakdownResolver,
  },
};

module.exports = BillBreakdown;
