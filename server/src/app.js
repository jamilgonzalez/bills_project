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
  // takes the user we get back from google and we choose what fields to generate jwt with
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
