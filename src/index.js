// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let H, Q, D, N, P, key;
    let balance = 0;
    let obj = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    let money = {};

    if (currency > 10000)
    return {error: "You are rich, my friend! We don't have so much coins for exchange"}

    if (currency <= 0)
    return {}

    do{
        for (key in obj){
            balance = (currency / obj[key])|0
            if (balance > 0){
                currency -= obj[key] * balance;
				if (key == 'H') money.H = balance;
                if (key == 'Q') money.Q = balance;
				if (key == 'D') money.D = balance;
				if (key == 'N') money.N = balance;
				if (key == 'P') money.P = balance;
            }
            else balance = 0;
        }
    }while(currency > 0)

    return money;
}