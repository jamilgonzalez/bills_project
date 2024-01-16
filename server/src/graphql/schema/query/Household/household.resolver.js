const db = require("../../../../db");

async function householdResolver(_parent, _args, { user }) {
  const { householdId } = await db.fetchUserByAccountId(user.accountId);
  return await db.fetchHousehold(householdId);
}

module.exports = householdResolver;
