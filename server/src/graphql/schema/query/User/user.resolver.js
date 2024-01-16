const db = require("../../../../db");
async function userResolver(_parent, _args, context) {
  return await db.fetchUserByAccountId(context.user.accountId);
}

module.exports = userResolver;
