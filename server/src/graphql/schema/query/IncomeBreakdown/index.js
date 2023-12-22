const { GraphQLObjectType, GraphQLNonNull, GraphQLFloat } = require("graphql");

const DateRangeInput = require("../../DateRangeInput");
const IncomeBreadownResolver = require("./incomeBreakdown.resolver");

const IncomeBreakdownType = new GraphQLObjectType({
  name: "IncomeBreakdown",
  fields: {
    netIncome: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: (parent) => {
        const { incomes } = parent;
        return incomes.reduce((acc, income) => acc + income.amount, 0);
      },
    },
    remainingIncome: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: () => 0.0,
    },
  },
});

const IncomeBreakdown = {
  incomeBreakdown: {
    type: new GraphQLNonNull(IncomeBreakdownType),
    args: DateRangeInput,
    resolve: IncomeBreadownResolver,
  },
};

module.exports = IncomeBreakdown;
