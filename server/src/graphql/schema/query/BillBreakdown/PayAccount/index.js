const { GraphQLObjectType, GraphQLFloat, GraphQLString } = require("graphql");

const PayAccount = new GraphQLObjectType({
  name: "PayAccount",
  fields: {
    payAccount: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLFloat,
    },
  },
});

module.exports = PayAccount;
