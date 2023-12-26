const { GraphQLObjectType, GraphQLNonNull, GraphQLFloat } = require("graphql");

const DateRangeInput = require("../../DateRangeInput");

const incomeBreadownResolver = require("./incomeBreakdown.resolver");
const { differenceInCalendarWeeks } = require("date-fns");

const FREQUENCY_MAP = {
  WEEKLY: 1,
  BIWEEKLY: 2,
  MONTHLY: 4,
  QUARTERLY: 12,
  YEARLY: 52,
};

const IncomeBreakdown = new GraphQLObjectType({
  name: "IncomeBreakdown",
  fields: {
    netIncome: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: ({ incomes, period }) => {
        const numWeeks = differenceInCalendarWeeks(
          new Date(period.endDate),
          new Date(period.startDate)
        );
        return incomes.reduce(
          (acc, income) =>
            acc + income.amount * (numWeeks / FREQUENCY_MAP[income.frequency]),
          0
        );
      },
    },
    remainingIncome: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: () => 0.0,
    },
  },
});

const IncomeBreakdownQuery = {
  incomeBreakdown: {
    type: new GraphQLNonNull(IncomeBreakdown),
    args: DateRangeInput,
    resolve: incomeBreadownResolver,
  },
};

module.exports = IncomeBreakdownQuery;
