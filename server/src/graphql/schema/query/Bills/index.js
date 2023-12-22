const { GraphQLNonNull, GraphQLList } = require("graphql");

const BillResolver = require("./bills.resolver");
const Bill = require("../../Bill");

const Bills = {
  bills: {
    type: new GraphQLNonNull(new GraphQLList(Bill)),
    resolve: BillResolver,
  },
};

module.exports = Bills;
