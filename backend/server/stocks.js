const STOCKS = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];
let prices = {};

function generatePrices() {
  STOCKS.forEach((ticker) => {
    prices[ticker] = (Math.random() * 1000 + 100).toFixed(2);
  });
}

setInterval(generatePrices, 1000);
generatePrices();

module.exports = { STOCKS, prices };
