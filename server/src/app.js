const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("dotenv").config();

const db = require("./db");
const authRouter = require("./routes/auth");
const googleStrategy = require("./auth/strategy/google");
const { checkLoggedIn, parseUser } = require("./auth/utils");

const { SECRET } = process.env;

const app = express();

// used only when user signs in using social auth
passport.serializeUser(async (userObject, done) => {
  const authenticatedUser = parseUser(userObject);
  const user = await db.fetchUserByAccountId(authenticatedUser.accountId);

  if (!user) {
    const { id: householdId } = await db.createHousehold(
      authenticatedUser.accountId
    );
    await db.createUser({ ...authenticatedUser, householdId });
    done(null, {
      accountId: authenticatedUser.accountId,
      email: authenticatedUser.email,
      householdId,
    });
  } else {
    done(null, {
      accountId: user.accountId,
      email: user.email,
      householdId: user.householdId,
    });
  }
});

// used on ever request post sign in
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// register strategy & initialize passport to apply strategies
app.use(passport.use(googleStrategy).initialize());

app.use(
  cookieSession({
    name: "session",
    maxAge: 60 * 60 * 100 * 24,
    keys: [SECRET],
  })
);

app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

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
