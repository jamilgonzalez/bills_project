const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
} = require("graphql");

const Frequency = require("./Frequency");
const SinkingFund = require("./SinkingFund");
const PaymentType = require("./PaymentType");

const Bill = new GraphQLObjectType({
  name: "Bill",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    amount: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    dueDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    paymentType: {
      type: PaymentType,
    },
    payAccount: {
      type: new GraphQLNonNull(GraphQLString),
      description:
        "Account the money will be drawn out of (ex. Bills checking account).",
    },
    frequency: {
      type: new GraphQLNonNull(Frequency),
    },
  },
});

module.exports = Bill;
