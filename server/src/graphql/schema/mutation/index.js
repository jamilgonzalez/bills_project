const { GraphQLObjectType } = require("graphql");

const addNewBill = require("./addNewBill");
const addNewIncome = require("./addNewIncome");
const addNewSinkingFund = require("./addNewSinkingFund");
const updateIncome = require("./updateIncome");
const deleteBill = require("./deleteBill");
const deleteIncome = require("./deleteIncome");
const updateBill = require("./updateBill");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...addNewBill,
    ...addNewIncome,
    ...addNewSinkingFund,
    ...deleteBill,
    ...deleteIncome,
    ...updateBill,
    ...updateIncome,
  }),
});

module.exports = mutation;
