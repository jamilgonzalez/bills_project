const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
} = require("graphql");

const Transaction = new GraphQLObjectType({
  name: "Transaction",
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

const SinkingFund = new GraphQLObjectType({
  name: "SinkingFund",
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
      type: new GraphQLNonNull(Transaction),
    },
  },
});

module.exports = SinkingFund;
