const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLEnumType,
} = require("graphql");

const userResolver = require("./user.resolver");

const Role = new GraphQLEnumType({
  name: "role",
  values: {
    admin: {
      value: "admin",
    },
    contributor: {
      valvue: "contributor",
    },
  },
});

const User = new GraphQLObjectType({
  name: "User",
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
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
    role: {
      type: new GraphQLNonNull(Role),
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
