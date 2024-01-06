const {
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
} = require("graphql");

const Frequency = require("../../Frequency");
const PaymentType = require("../../PaymentType");

const AddNewBillInput = {
  input: {
    type: new GraphQLInputObjectType({
      name: "AddBillInput",
      fields: {
        householdId: {
          type: new GraphQLNonNull(GraphQLID),
        },
        bill: {
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
          }),
        },
      },
    }),
  },
};

module.exports = AddNewBillInput;
