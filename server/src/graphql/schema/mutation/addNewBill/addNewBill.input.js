const {
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
} = require("graphql");

const Frequency = require("../../Frequency");
const PaymentStatus = require("../../PaymentStatus");

const addNewBillInput = {
  input: {
    type: new GraphQLInputObjectType({
      name: "BillInput",
      fields: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        amount: {
          type: new GraphQLNonNull(GraphQLFloat),
        },
        dueDate: {
          type: new GraphQLNonNull(GraphQLString),
        },
        paymentStatus: {
          type: new GraphQLNonNull(PaymentStatus),
        },
        payAccount: {
          type: new GraphQLNonNull(GraphQLString),
        },
        frequency: {
          type: new GraphQLNonNull(Frequency),
        },
      },
    }),
  },
};

module.exports = addNewBillInput;
