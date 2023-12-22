const { GraphQLEnumType } = require("graphql");

const frequency = new GraphQLEnumType({
  name: "Frequency",
  values: {
    weekly: {
      value: "WEEKLY",
    },
    biWeekly: {
      value: "BIWEEKLY",
    },
    monthly: {
      value: "MONTHLY",
    },
    quarterly: {
      value: "QUARTERLY",
    },
    yearly: {
      value: "YEARLY",
    },
  },
});

module.exports = frequency;
