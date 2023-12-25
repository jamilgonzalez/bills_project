const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLString,
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

module.exports = Transaction;
