const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const userResolver = require("./user.resolver");

const User = new GraphQLObjectType({
  name: "User",
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    accountId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    avatar: {
      type: new GraphQLNonNull(GraphQLString),
    },
    householdId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
});

const UserQuery = {
  user: {
    type: new GraphQLNonNull(User),
    resolve: userResolver,
  },
};

module.exports = UserQuery;
