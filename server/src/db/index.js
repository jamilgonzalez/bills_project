const localDb = require("./local");
const mongoDb = require("./mongo");
require("dotenv").config;

const { ENV = "local" } = process.env;

module.exports = ENV === "local" ? localDb : mongoDb;
