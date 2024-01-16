const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const Role = require("./Role");

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

module.exports = User;
