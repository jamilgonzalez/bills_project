const { GraphQLNonNull, GraphQLList, GraphQLID } = require("graphql");
const Bill = require("../../Bill");

const resolver = require("./resolver");

const deleteBill = {
  deleteBill: {
    type: new GraphQLNonNull(new GraphQLList(Bill)),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: resolver,
  },
};

module.exports = deleteBill;
