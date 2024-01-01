const { model } = require("mongoose");
const { USER_SCHEMA } = require("./schema");

const userModel = model("User", USER_SCHEMA);

async function fetchUser(accountId) {
  try {
    return await userModel.find({ accountId }, { _id: 0, __v: 0 });
  } catch (err) {
    console.error(`Error fetching user - ${err}`);
    throw Error(err);
  }
}

async function createUser(user) {
  try {
    await userModel.create(user);
  } catch (err) {
    console.error(`Error creating user - ${err}`);
    throw Error(err);
  }
}

module.exports = {
  createUser,
  fetchUser,
};
