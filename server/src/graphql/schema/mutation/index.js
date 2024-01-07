const { GraphQLObjectType } = require("graphql");

const addNewBill = require("./addNewBill");
const addNewSinkingFund = require("./addNewSinkingFund");
const deleteBill = require("./deleteBill");
const deleteSinkingFund = require("./deleteSinkingFund");
const updateBill = require("./updateBill");
const updateSinkingFund = require("./updateSinkingFund");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...addNewBill,
    ...deleteBill,
    ...updateBill,
    ...addNewSinkingFund,
    ...deleteSinkingFund,
    ...updateSinkingFund,
  },
});

module.exports = mutation;
