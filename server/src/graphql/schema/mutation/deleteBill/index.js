const { GraphQLNonNull, GraphQLList, GraphQLID } = require("graphql");

const Bill = require("../../Bill");

const deleteBillResolver = require("./deleteBill.resolver");

const deleteBill = {
  deleteBill: {
    type: new GraphQLNonNull(new GraphQLList(Bill)),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: deleteBillResolver,
  },
};

module.exports = deleteBill;
