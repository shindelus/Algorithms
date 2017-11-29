// Find all possible combinations of coin change given coins and amount


let coinChange = (coins, amount) => {
  let possibilities = [];
  let recurse = (currChange, amountLeft, currCoin) => {
    if (amountLeft === 0) {
      possibilities.push(currChange);
      return;
    }
    if (amountLeft < 0) {
      return;
    } else {
      for (let i = currCoin; i < coins.length; i++) {
        recurse(currChange.concat(coins[i]), amountLeft - coins[i], i);
      }
    }
  }
  recurse([], amount, 0);
  return possibilities;
}

console.log(coinChange([5,2,1], 10))
