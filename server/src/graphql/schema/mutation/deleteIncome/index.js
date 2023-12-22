const { GraphQLNonNull, GraphQLList, GraphQLID } = require("graphql");
const IncomeStream = require("../../IncomeStream");
const deleteIncomeResolver = require("./resolver");

const deleteIncome = {
  deleteIncome: {
    type: new GraphQLNonNull(new GraphQLList(IncomeStream)),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: deleteIncomeResolver,
  },
};

module.exports = deleteIncome;
