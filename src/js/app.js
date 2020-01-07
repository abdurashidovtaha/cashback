const regularPurchases = 30000;
const regularPurchasesPercent = 0.01;
let cashback = regularPurchases * regularPurchasesPercent;
cashbackLimit = 300;
if (cashback > cashbackLimit) {
    cashback = cashbackLimit
}
console.log(cashback);