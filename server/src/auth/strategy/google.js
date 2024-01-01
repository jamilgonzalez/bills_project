const { Strategy } = require("passport-google-oauth20");
const { parsed: config } = require("dotenv").config();

const GOOGLE_STRATEGY = new Strategy(
  {
    callbackURL: "/auth/google/callback",
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
  },
  (accessToken, refreshToken, profile, done) => {
    done(null, profile);
  }
);

module.exports = GOOGLE_STRATEGY;
