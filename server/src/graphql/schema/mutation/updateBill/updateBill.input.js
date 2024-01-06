const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLFloat,
  GraphQLInputObjectType,
} = require("graphql");

const PaymentType = require("../../PaymentType");
const Frequency = require("../../Frequency");

const updateBillInput = new GraphQLInputObjectType({
  name: "UpdateBillInput",
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
      type: new GraphQLNonNull(PaymentType),
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

module.exports = updateBillInput;
