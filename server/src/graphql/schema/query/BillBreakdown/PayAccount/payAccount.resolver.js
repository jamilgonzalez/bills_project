function payAccountResolver({ bills }) {
  const payAccountMap = new Map();

  bills.forEach((bill) => {
    const payAccountSum = payAccountMap.get(bill.payAccount);
    if (payAccountSum) {
      payAccountMap.set(bill.payAccount, payAccountSum + bill.amount);
    } else {
      payAccountMap.set(bill.payAccount, bill.amount);
    }
  });

  return Array.from(payAccountMap.entries()).map(([payAccount, amount]) => ({
    payAccount,
    amount,
  }));
}

module.exports = payAccountResolver;
