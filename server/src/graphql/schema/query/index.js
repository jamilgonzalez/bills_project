const { GraphQLObjectType } = require("graphql");

const User = require("./User");
const Household = require("./Household");

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...User,
    ...Household,
  },
});

module.exports = query;
