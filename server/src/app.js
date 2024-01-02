const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const { parsed: config } = require("dotenv").config();

const googleStrategy = require("./auth/strategy/google");

const authRouter = require("./routes/auth");

const { checkLoggedIn } = require("./auth/utils");

const app = express();

// used only when user signs in using social auth
passport.serializeUser((user, done) => {
  // 1. use id to check if user exists
  // 2a. if user does not exist in db, create user with id, email and avatar
  // and then return done as seen below
  // 2b. if user exists return done as seen below

  // token will contain id, we will make sure on every request that the user is only requesting data (fetch requests will be by id) that match the id in token
  done(null, {
    id: user.id,
    email: user.emails[0].value,
    avatar: user.photos[0].value,
  });
});

// used on ever request post sign in
passport.deserializeUser(async (obj, done) => {
  done(null, obj);
});

// register strategy & initialize passport to apply strategies
app.use(passport.use(googleStrategy).initialize());

// passport needs this middleware to maintain session
app.use(
  cookieSession({
    name: "session",
    maxAge: 60 * 60 * 100 * 24,
    keys: [config.SECRET],
  })
);

app.use(passport.session());

app.use(cors());

app.use(morgan("combined"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

// routes

app.use("/auth", authRouter);

// client
app.get(["/", "/dashboard", "/login"], checkLoggedIn, (_, res) => {
  return res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
