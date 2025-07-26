function minimizingLoss(prices) {
  let minLoss = Infinity;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        const loss = prices[i] - prices[j];
        if (loss < minLoss) {
          minLoss = loss;
        }
      }
    }
  }

  return minLoss === Infinity ? -1 : minLoss;
}

module.exports = minimizingLoss;
