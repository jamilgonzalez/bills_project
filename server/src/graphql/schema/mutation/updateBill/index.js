const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLFloat,
  GraphQLInputObjectType,
} = require("graphql");

const Bill = require("../../Bill");
const UpdateBillResolver = require("./updateBill.resolver");
const PaymentStatus = require("../../PaymentStatus");
const Frequency = require("../../Frequency");

const TransactionInput = new GraphQLInputObjectType({
  name: "TransactionInput",
  fields: {
    date: {
      type: new GraphQLNonNull(GraphQLString),
    },
    amount: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    description: {
      type: GraphQLString,
    },
  },
});

const SinkingFundInput = new GraphQLInputObjectType({
  name: "SinkingFundInput",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    dueDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    targetAmount: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: "Amount being saved.",
    },
    totalSaved: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    transactions: {
      type: new GraphQLNonNull(TransactionInput),
    },
  },
});

const UpdateBillInput = new GraphQLInputObjectType({
  name: "UpdateBillInput",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLFloat,
    },
    dueDate: {
      type: GraphQLString,
    },
    paymentStatus: {
      type: PaymentStatus,
    },
    payAccount: {
      type: GraphQLString,
      description:
        "Account the money will be drawn out of (ex. Bills checking account).",
    },
    frequency: {
      type: Frequency,
    },
    sinkingFund: {
      type: SinkingFundInput,
    },
  },
});

const UpdateBill = {
  updateBill: {
    type: new GraphQLNonNull(new GraphQLList(Bill)),
    args: {
      input: {
        type: UpdateBillInput,
      },
    },
    resolve: UpdateBillResolver,
  },
};

module.exports = UpdateBill;
