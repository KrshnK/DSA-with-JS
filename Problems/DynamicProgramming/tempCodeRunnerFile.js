function minCoin(coins, amount, memo = {}) {
    if (amount in memo) return memo
    if (amount == 0) return 0
    if (amount < 0) return -1

    let minCoinCount = Infinity

    for (const coin of coins) {
        const res = minCoin(coins, amount - coin, memo)

        if (res >= 0) {
            minCoinCount = Math.min(minCoinCount, res + 1)
        }
    }

    memo[amount] = (minCoinCount === Infinity) ? -1 : minCoinCount
    console.log(`Amount: ${amount}, MinCoins: ${memo[amount]}`);
    return memo[amount]
}