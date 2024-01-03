const express = require("express");
const passport = require("passport");

const authRouter = express.Router();

// 1. when user clicks to login
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);

// 2. upon success, google will redirect to this callback uri
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login#failed",
    successRedirect: "/dashboard",
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
  return res.redirect("/");
});

module.exports = authRouter;
