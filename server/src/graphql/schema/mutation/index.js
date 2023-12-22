const { GraphQLObjectType } = require("graphql");

const addNewBill = require("./addNewBill");
const addNewIncome = require("./addNewIncome");
const deleteBill = require("./deleteBill");
const deleteIncome = require("./deleteIncome");
const updateBill = require("./updateBill");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...addNewBill,
    ...addNewIncome,
    ...deleteBill,
    ...deleteIncome,
    ...updateBill,
  }),
});

module.exports = mutation;
