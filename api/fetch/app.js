// let fetchBitCoin = fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//     .then(res => {
//         console.log("resolved", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log("parsed");
//         console.log(data.ticker.price);

//     })
//     .catch(e => {
//         console.log("error", e);
//     });
let fetchBitCoinPrice = async () => {
    try {
        let res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd")
        let data = await res.json();
        console.log(data.ticker.price);
    } catch (e) {
        console.log("error", e);
    }
};