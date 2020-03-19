// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.
function change(amount, coins) {
    
  if (amount == 0) return 1;
  let currentValue = coins[coins.length - 1];
  let totalCombinations = 0;
  for(let i = 0; i * currentValue <= amount; i++){
      totalCombinations += change(amount - i * currentValue, coins.slice(0, -1)) 
  };
  return totalCombinations
};

