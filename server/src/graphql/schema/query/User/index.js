const { GraphQLNonNull } = require("graphql");

const userResolver = require("./user.resolver");

const User = require("../../User");

const UserQuery = {
  user: {
    type: new GraphQLNonNull(User),
    resolve: userResolver,
  },
};

module.exports = UserQuery;
