// Create our number formatter.
export const formatCurrency = (amount, showDecimal = true) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: showDecimal ? 2 : 0, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(amount); /* $2,500.00 */
};
