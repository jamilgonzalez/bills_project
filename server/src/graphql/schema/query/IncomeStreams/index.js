const { GraphQLNonNull, GraphQLList } = require("graphql");

const IncomeStream = require("../../IncomeStream");
const IncomeStreamResolver = require("./incomeStreams.resolver");

const IncomeStreams = {
  incomeStreams: {
    type: new GraphQLNonNull(new GraphQLList(IncomeStream)),
    resolve: IncomeStreamResolver,
  },
};

module.exports = IncomeStreams;
