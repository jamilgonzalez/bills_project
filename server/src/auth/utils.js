function checkLoggedIn(req, res, next) {
  const isLoggedIn = req.isAuthenticated();

  if (!isLoggedIn && req.url !== "/login") {
    return res.redirect("/login");
  }

  next();
}

function parseUser(user) {
  const provider = user.provider;

  switch (provider) {
    case "google":
      const { email, sub: accountId, picture: avatar } = user._json;
      return {
        accountId,
        email,
        avatar,
      };
  }
}
module.exports = {
  checkLoggedIn,
  parseUser,
};
