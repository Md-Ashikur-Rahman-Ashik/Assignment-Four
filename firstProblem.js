function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number") {
    return "Please provide a number";
  } else if (ticketSale < 0) {
    return "Invalid Number";
  }

  const ticketPrice = 120;
  const guardFee = 500;
  const staffFee = 8 * 50;

  const otherExpense = guardFee + staffFee;

  const ticketProfit = ticketPrice * ticketSale;

  const totalMoney = ticketProfit - otherExpense;
  return totalMoney;
}