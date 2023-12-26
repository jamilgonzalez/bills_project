const { GraphQLNonNull, GraphQLList } = require("graphql");

const billsResolver = require("./bills.resolver");
const Bill = require("../../Bill");

const bills = {
  bills: {
    type: new GraphQLNonNull(new GraphQLList(Bill)),
    resolve: billsResolver,
  },
};

module.exports = bills;
