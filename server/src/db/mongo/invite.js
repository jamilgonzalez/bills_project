const { model } = require("mongoose");

const INVITE_SCHEMA = require("./schema");

const inviteModel = model("Invites", INVITE_SCHEMA);

// CREATE INVITE
async function createInvite(email, houseHoldId) {
  try {
    return await inviteModel.create({ email, houseHoldId });
  } catch (error) {
    console.error(`Error creating invite for email ${email}`);
    throw Error("Error creating invite in db");
  }
}
// FETCH INVITE BY EMAIL
async function fetchInvite(email) {
  try {
    const invite = await inviteModel.findOne({ email }, { _id: 0, __v: 0 });
    return invite.houseHoldId;
  } catch (error) {
    console.error(`Error creating invite for email ${email}`);
    throw Error("Error creating invite in db");
  }
}

module.exports = {
  createInvite,
  fetchInvite,
};
