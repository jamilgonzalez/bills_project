const express = require("express");
const passport = require("passport");

const authRouter = express.Router();

// 1. when user clicks to login
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

// 2. upon success, google will redirect to this callback uri
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login#failed",
    successRedirect: "http://localhost:3000/dashboard?tab=budgeting",
    session: true,
  })
);

authRouter.post("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      console.error(`Error logging out - ${err}`);
      return next(err);
    }
  });
  return res.redirect("/login");
});

module.exports = authRouter;
