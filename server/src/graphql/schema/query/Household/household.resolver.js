const db = require("../../../../db");

async function householdResolver(_parent, _args, { user }) {
  const { householdId } = await db.fetchUser(user.accountId);
  return await db.fetchHousehold(householdId);
}

module.exports = householdResolver;
