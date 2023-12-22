const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(
  cors(),
  morgan("combined"),
  express.json(),
  express.static(path.join(__dirname, "..", "public"))
);

app.get("/", (_req, res) => {
  return res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
