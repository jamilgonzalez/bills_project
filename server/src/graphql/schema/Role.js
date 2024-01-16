const { GraphQLEnumType } = require("graphql");

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

module.exports = Role;
