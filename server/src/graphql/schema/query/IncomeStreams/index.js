const { GraphQLNonNull, GraphQLList } = require("graphql");

const IncomeStream = require("../../IncomeStream");

const incomeStreamResolver = require("./incomeStreams.resolver");

const IncomeStreams = {
  incomeStreams: {
    type: new GraphQLNonNull(new GraphQLList(IncomeStream)),
    resolve: incomeStreamResolver,
  },
};

module.exports = IncomeStreams;
