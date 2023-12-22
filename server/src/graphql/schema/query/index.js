const { GraphQLObjectType } = require("graphql");

const Bills = require("./Bills");
const BillBreakdown = require("./BillBreakdown");
const IncomeBreakdown = require("./IncomeBreakdown");
const IncomeStreams = require("./IncomeStreams");

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    ...BillBreakdown,
    ...Bills,
    ...IncomeBreakdown,
    ...IncomeStreams,
  }),
});

module.exports = query;
