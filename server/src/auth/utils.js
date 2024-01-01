function checkLoggedIn(req, res, next) {
  const isLoggedIn = req.isAuthenticated();

  if (!isLoggedIn && req.url !== "/login") {
    return res.redirect("/login");
  }

  next();
}

module.exports = {
  checkLoggedIn,
};
