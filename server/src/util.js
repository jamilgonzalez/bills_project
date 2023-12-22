const {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} = require("@apollo/server/plugin/landingPage/default");

require("dotenv").config();

const { ENV } = process.env;

const ApolloLandingPage =
  ENV === "local"
    ? ApolloServerPluginLandingPageLocalDefault
    : ApolloServerPluginLandingPageProductionDefault;

module.exports = {
  ApolloLandingPage,
};
