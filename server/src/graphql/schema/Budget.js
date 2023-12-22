const { GraphQLObjectType, GraphQLList, GraphQLNonNull } = require("graphql");

const Bill = require("./Bill");
const Income = require("./Income");
const SinkingFund = require("./SinkingFund");

const Budget = new GraphQLObjectType({
  name: "Budget",
  fields: {
    incomes: {
      type: new GraphQLNonNull(new GraphQLList(Income)),
    },
    bills: {
      type: new GraphQLNonNull(new GraphQLList(Bill)),
    },
    sinkingFunds: {
      type: new GraphQLNonNull(new GraphQLList(SinkingFund)),
    },
  },
});

module.exports = Budget;
