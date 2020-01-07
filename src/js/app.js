const regularPurchases = 10000;
const regularPurchasesPercent = 0.01;

const increasedPurchases = 10000;
const increasedPurchasesPercent = 0.05;

const specialPurchases = 5000;
const specialPurchasesPercent = 0.3;

let cashback = regularPurchases * regularPurchasesPercent +
    increasedPurchases * increasedPurchasesPercent +
    specialPurchases * specialPurchasesPercent;
cashbackLimit = 3000;

if (cashback > cashbackLimit) {
    cashback = cashbackLimit
}
console.log(cashback);