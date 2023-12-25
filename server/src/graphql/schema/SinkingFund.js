const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
} = require("graphql");

const Transaction = require("./Transaction");
const { differenceInCalendarWeeks } = require("date-fns");

const SinkingFund = new GraphQLObjectType({
  name: "SinkingFund",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    targetAmount: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    totalSaved: {
      type: GraphQLFloat,
    },
    percentComplete: {
      type: GraphQLString,
      resolve: (source) => {
        return `${((source.totalSaved / source.targetAmount) * 100).toFixed(
          2
        )}%`;
      },
    },
    weeklyContribution: {
      type: GraphQLFloat,
      resolve: ({ endDate, targetAmount, totalSaved = 0 }) => {
        if (endDate) {
          const numWeeksToSave = differenceInCalendarWeeks(
            new Date(endDate),
            Date.now()
          );
          return (targetAmount - totalSaved) / numWeeksToSave;
        }
        return endDate;
      },
    },
    transactions: {
      type: new GraphQLList(Transaction),
    },
    endDate: {
      type: GraphQLString,
    },
  },
});

module.exports = SinkingFund;
