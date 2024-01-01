function checkLoggedIn(req, res, next) {
  // deserialize cookie and check / validate access token
  const isLoggedIn = req.isAuthenticated();
  if (!isLoggedIn) {
    return res.status(401).json({ errors: [{ message: "Unathorized" }] });
  }
  next();
}

module.exports = {
  checkLoggedIn,
};
