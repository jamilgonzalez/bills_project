const {
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
} = require("graphql");

const Frequency = require("../../Frequency");
const PaymentType = require("../../PaymentType");

const AddNewBillInput = new GraphQLInputObjectType({
  name: "AddBillInput",
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
    payAccount: {
      type: new GraphQLNonNull(GraphQLString),
    },
    paymentType: {
      type: new GraphQLNonNull(PaymentType),
    },
    frequency: {
      type: new GraphQLNonNull(Frequency),
    },
  },
});

module.exports = AddNewBillInput;
