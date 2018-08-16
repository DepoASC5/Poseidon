//URLs for different currency fetch
const USDDayData = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,BCH&tsyms=USD";
const CADDayData = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,BCH&tsyms=CAD";
const EURODayData = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,BCH&tsyms=EUR";
const KRWDayData = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,BCH&tsyms=KRW";
// Default
fetch(USDDayData)
    .then(function (response) {
        let json = response.json();
        return json;
    })
    .then (function (myJson) {

    let data = myJson.DISPLAY;
    let bitcoin = data.BTC.USD;
    let litecoin = data.LTC.USD;
    let ethereum = data.ETH.USD;
    let bitcoinCash = data.BCH.USD;

    //24 hour percent change in coin value
    let bitcoinPercentChangeIn24 = bitcoin.CHANGEPCT24HOUR + "%";
    let litecoinPercentChangeIn24 = litecoin.CHANGEPCT24HOUR + "%";
    let ethereumPercentChangeIn24 = ethereum.CHANGEPCT24HOUR + "%";
    let bitcoinCashPercentChangeIn24 = bitcoinCash.CHANGEPCT24HOUR + "%";
    //Grabs price in 
    document.getElementById("bitcoin_price").innerHTML = `Current Value: ${bitcoin.PRICE}`;
    document.getElementById("litecoin_price").innerHTML = `Current Value: ${litecoin.PRICE}`;
    document.getElementById("ethereum_price").innerHTML = `Current Value: ${ethereum.PRICE}`;
    document.getElementById("bitcoinCash_price").innerHTML = `Current Value: ${bitcoinCash.PRICE}`;

    //Shows percent change in each h4 element
    document.getElementById("coin1_name").innerHTML = `Bitcoin, (BTC): ${bitcoinPercentChangeIn24}`; 
    document.getElementById("coin2_name").innerHTML = `Litecoin, (LTC): ${litecoinPercentChangeIn24}`;     
    document.getElementById("coin3_name").innerHTML = `Ethereum, (ETH): ${ethereumPercentChangeIn24}`;     
    document.getElementById("coin4_name").innerHTML = `Bitcoin Cash, (BCH): ${bitcoinCashPercentChangeIn24}`; 
    //access myCoinAmount
    let myCoinAccount = document.getElementById("cashValue");
    let litecoinAccount = document.getElementById("litecoincashValue");
    let ethereumAccount = document.getElementById("ethereumcashValue");
    let bitcoinCashAccount = document.getElementById("bitcoinCashcashValue");
    //Puts those values into Coin ammounts
    myCoinAccount.innerHTML = bitcoin.PRICE;
    litecoinAccount.innerHTML = litecoin.PRICE;
    ethereumAccount.innerHTML = ethereum.PRICE;
    bitcoinCashAccount.innerHTML = bitcoinCash.PRICE;

    //Controls text color relative to percent
        if (bitcoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin1_name").style.color = "#009600";
        } else if (bitcoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin1_name").style.color = "#EE3B3B";
        }

        if (litecoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin2_name").style.color = "#009600";
        } else if (litecoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin2_name").style.color = "#EE3B3B";
        }

        if (ethereum.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin3_name").style.color = "#009600";
        } else if (ethereum.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin3_name").style.color = "#EE3B3B";
        }
        
        if (bitcoinCash.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin4_name").style.color = "#009600";
        } else if (bitcoinCash.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin4_name").style.color = "#EE3B3B";
        }
        //Grab User total element
    let total = Number(bitcoin.CHANGEPCT24HOUR) + Number(litecoin.CHANGEPCT24HOUR) + Number(ethereum.CHANGEPCT24HOUR) + Number(bitcoinCash.CHANGEPCT24HOUR);
    const userTotal = document.getElementById("userTotalValue");
    userTotal.innerHTML = `Net Percentage: ${(total/4).toFixed(3)}%`;
    if (total/4 > 0) {
        userTotal.style.color = "#009600";
    } else if (total/4 < 0) {
        userTotal.style.color = "red";
    }
    })
    //Grab image source for each graph
    const bitcoinGraph = document.getElementById("bitcoinGraph");
    const litecoinGraph = document.getElementById("litecoinGraph");
    const ethereumGraph = document.getElementById("ethereumGraph");
    const bitcoinCashGraph = document.getElementById("bitcoinCashGraph");
    //Sets source to daily image value
    bitcoinGraph.src = "assets/BTCDaily/BTC8_14.jpeg";
    litecoinGraph.src = "assets/LTCDaily/LTC8_14.jpeg";
    ethereumGraph.src = "assets/ETHDaily/ETH8_14.jpeg";
    bitcoinCashGraph.src = "assets/BCHDaily/BCH8_14.jpeg";


//Grabs buttons for time period
const day = document.getElementById("Day");
const week = document.getElementById("Week");
const month = document.getElementById("Month");
const year = document.getElementById("Year");

//Different data for different times
day.addEventListener("click", dayData);
week.addEventListener("click", weekData);
// month.addEventListener("click", monthData);
// year.addEventListener("click", yearData);

//Time based data display functions
function dayData () {
    fetch(USDDayData)
    .then(function (response) {
        let json = response.json();
        return json;
    })
    .then (function (myJson) {

    let data = myJson.DISPLAY;
    let bitcoin = data.BTC.USD;
    let litecoin = data.LTC.USD;
    let ethereum = data.ETH.USD;
    let bitcoinCash = data.BCH.USD;

    //24 hour percent change in coin value
    let bitcoinPercentChangeIn24 = bitcoin.CHANGEPCT24HOUR + "%";
    let litecoinPercentChangeIn24 = litecoin.CHANGEPCT24HOUR + "%";
    let ethereumPercentChangeIn24 = ethereum.CHANGEPCT24HOUR + "%";
    let bitcoinCashPercentChangeIn24 = bitcoinCash.CHANGEPCT24HOUR + "%";
    //Grabs price in 
    document.getElementById("bitcoin_price").innerHTML = `Current Value: ${bitcoin.PRICE}`;
    document.getElementById("litecoin_price").innerHTML = `Current Value: ${litecoin.PRICE}`;
    document.getElementById("ethereum_price").innerHTML = `Current Value: ${ethereum.PRICE}`;
    document.getElementById("bitcoinCash_price").innerHTML = `Current Value: ${bitcoinCash.PRICE}`;

    //Shows percent change in each h4 element
    document.getElementById("coin1_name").innerHTML = `Bitcoin, (BTC): ${bitcoinPercentChangeIn24}`; 
    document.getElementById("coin2_name").innerHTML = `Litecoin, (LTC): ${litecoinPercentChangeIn24}`;     
    document.getElementById("coin3_name").innerHTML = `Ethereum, (ETH): ${ethereumPercentChangeIn24}`;     
    document.getElementById("coin4_name").innerHTML = `Bitcoin Cash, (BCH): ${bitcoinCashPercentChangeIn24}`; 
    //Controls text color relative to percent
        if (bitcoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin1_name").style.color = "#009600";
        } else if (bitcoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin1_name").style.color = "#EE3B3B";
        }

        if (litecoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin2_name").style.color = "#009600";
        } else if (litecoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin2_name").style.color = "#EE3B3B";
        }

        if (ethereum.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin3_name").style.color = "#009600";
        } else if (ethereum.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin3_name").style.color = "#EE3B3B";
        }
        
        if (bitcoinCash.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin4_name").style.color = "#009600";
        } else if (bitcoinCash.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin4_name").style.color = "#EE3B3B";
        }
    //Grab User total element
    let total = Number(bitcoin.CHANGEPCT24HOUR) + Number(litecoin.CHANGEPCT24HOUR) + Number(ethereum.CHANGEPCT24HOUR) + Number(bitcoinCash.CHANGEPCT24HOUR);
    const userTotal = document.getElementById("userTotalValue");
    userTotal.innerHTML = `Net Percentage: ${(total/4).toFixed(3)}%`;
    if (total/4 > 0) {
        userTotal.style.color = "#009600";
    } else if (total/4 < 0) {
        userTotal.style.color = "red";
    }
    })
    //Grab image source for each graph
    const bitcoinGraph = document.getElementById("bitcoinGraph");
    const litecoinGraph = document.getElementById("litecoinGraph");
    const ethereumGraph = document.getElementById("ethereumGraph");
    const bitcoinCashGraph = document.getElementById("bitcoinCashGraph");
    //Sets source to daily image value
    bitcoinGraph.src = "assets/BTCDaily/BTC8_14.jpeg";
    litecoinGraph.src = "assets/LTCDaily/LTC8_14.jpeg";
    ethereumGraph.src = "assets/ETHDaily/ETH8_14.jpeg";
    bitcoinCashGraph.src = "assets/BCHDaily/BCH8_14.jpeg";
}
let weeklyTotal = 0;
let runWeeklyTotal = true;
let globalWeekly; 
function weekData () {
    //Bitcoin 7day data FETCH
    fetch("https://api.coinmarketcap.com/v2/ticker/1/")
    .then(function (response) {
        let json = response.json();
        return json;
    })
    .then (function (myJson) {
        let results = myJson;
        let bitcoin7DayPercentChange = results.data.quotes.USD.percent_change_7d + "%";
        document.getElementById("coin1_name").innerHTML = `Bitcoin, (BTC): ${bitcoin7DayPercentChange}`; 
        //Controls text color relative to percent
        if (results.data.quotes.USD.percent_change_7d< 0) {
            document.getElementById("coin1_name").style.color = "#EE3B3B";
        } else if (results.data.quotes.USD.percent_change_7d> 0) {
            document.getElementById("coin1_name").style.color = "#009600";
        }
    
        weeklyTotal += results.data.quotes.USD.percent_change_7d;
    });
    //Litecoin 7day data FETCH
    fetch("https://api.coinmarketcap.com/v2/ticker/2/") 
    .then(function (response) {
        let json = response.json();
        return json;
    })
    .then (function (myJson) {
        let results = myJson;
        let litecoin7DayPercentChange = results.data.quotes.USD.percent_change_7d + "%";
        document.getElementById("coin2_name").innerHTML = `Litecoin, (LTC): ${litecoin7DayPercentChange}`;  
        //Controls text color relative to percent
        
        if (results.data.quotes.USD.percent_change_7d < 0) {
            document.getElementById("coin2_name").style.color = "#EE3B3B";
        } else if (results.data.quotes.USD.percent_change_7d > 0) {
            document.getElementById("coin2_name").style.color = "#009600";
        }
            //Grab image source for each graph
    const bitcoinGraph = document.getElementById("bitcoinGraph");
    const litecoinGraph = document.getElementById("litecoinGraph");
    const ethereumGraph = document.getElementById("ethereumGraph");
    const bitcoinCashGraph = document.getElementById("bitcoinCashGraph");
    //Sets source to daily image value
    bitcoinGraph.src = "assets/Weekly/BTC8-6_8-13.png";
    litecoinGraph.src = "assets/Weekly/LTC8-6_8-13.jpeg";
    ethereumGraph.src = "assets/Weekly/ETH8-6_8-13.jpeg";
    bitcoinCashGraph.src = "assets/Weekly/BCH8-6_8-13.jpeg";

    weeklyTotal += results.data.quotes.USD.percent_change_7d;
    });
    //Ethereum 7day data FETCH
    fetch("https://api.coinmarketcap.com/v2/ticker/1027/") 
    .then(function (response) {
        let json = response.json();
        return json;
    })
    .then (function (myJson) {
        let results = myJson;
        let ethereum7DayPercentChange = results.data.quotes.USD.percent_change_7d + "%";
        document.getElementById("coin3_name").innerHTML = `Ethereum, (ETH): ${ethereum7DayPercentChange}`;  
        //Controls text color relative to percent
        if (results.data.quotes.USD.percent_change_7d < 0) {
            document.getElementById("coin3_name").style.color = "#EE3B3B";
        } else if (results.data.quotes.USD.percent_change_7d > 0) {
            document.getElementById("coin3_name").style.color = "#009600";
        }
    
        weeklyTotal += results.data.quotes.USD.percent_change_7d;
    });
    //Bitcoin Cash 7day data FETCH
    fetch("https://api.coinmarketcap.com/v2/ticker/1831/") 
    .then(function (response) {
        let json = response.json();
        return json;
    })
    .then (function (myJson) {
        let results = myJson;
        let bitcoinCash7DayPercentChange = results.data.quotes.USD.percent_change_7d + "%";
        document.getElementById("coin4_name").innerHTML = `Bitcoin Cash, (BCH): ${bitcoinCash7DayPercentChange}`;  
        //Controls text color relative to percent
        
        if (results.data.quotes.USD.percent_change_7d < 0) {
            document.getElementById("coin4_name").style.color = "#EE3B3B";
        } else if (results.data.quotes.USD.percent_change_7d > 0) {
            document.getElementById("coin4_name").style.color = "#009600";
        }
    if (runWeeklyTotal === true) {
        weeklyTotal += results.data.quotes.USD.percent_change_7d;
        const userTotal = document.getElementById("userTotalValue");
        userTotal.innerHTML = `Net Percentage: ${(weeklyTotal/4).toFixed(3)}%`;
        globalWeekly = weeklyTotal;
        if (weeklyTotal/4 > 0) {
            userTotal.style.color = "#009600";
        } else if (weeklyTotal/4 < 0) {
            userTotal.style.color = "red";
        }
        runWeeklyTotal = false;
        return globalWeekly;
    } else {
        const userTotal = document.getElementById("userTotalValue");
        userTotal.innerHTML = `Net Percentage: ${(globalWeekly/4).toFixed(3)}%`;
        if (globalWeekly > 0) {
            userTotal.style.color = "#009600";
        } else if (globalWeekly < 0) {
            userTotal.style.color = "red";
        }
    }
    })
}

function monthData () {
    fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,BCH&tsyms=USD")
    .then(function (response) {
        let json = response.json();
        return json;
    })
    .then (function (myJson) {
    let data = myJson.DISPLAY;
    let bitcoin = data.BTC.USD;
    let litecoin = data.LTC.USD;
    let ethereum = data.ETH.USD;
    let bitcoinCash = data.BCH.USD;

    //24 hour percent change in coin value
    let bitcoinPercentChangeIn24 = bitcoin.CHANGEPCT24HOUR + "%";
    let litecoinPercentChangeIn24 = litecoin.CHANGEPCT24HOUR + "%";
    let ethereumPercentChangeIn24 = ethereum.CHANGEPCT24HOUR + "%";
    let bitcoinCashPercentChangeIn24 = bitcoinCash.CHANGEPCT24HOUR + "%";
  
    //Shows percent change in each h4 element
    document.getElementById("coin1_name").innerHTML = `Bitcoin, (BTC): ${bitcoinPercentChangeIn24}`; 
    document.getElementById("coin2_name").innerHTML = `Litecoin, (LTC): ${litecoinPercentChangeIn24}`;     
    document.getElementById("coin3_name").innerHTML = `Ethereum, (ETH): ${ethereumPercentChangeIn24}`;     
    document.getElementById("coin4_name").innerHTML = `Bitcoin Cash, (BCH): ${bitcoinCashPercentChangeIn24}`; 
    //Controls text color relative to percent
        if (bitcoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin1_name").style.color = "#009600";
        }
        if (bitcoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin1_name").style.color = "#EE3B3B";
        }
        if (litecoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin2_name").style.color = "#009600";
        }
        if (litecoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin2_name").style.color = "#EE3B3B";
        }
        if (ethereum.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin3_name").style.color = "#009600";
        }
        if (ethereum.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin3_name").style.color = "#EE3B3B";
        }
        if (bitcoinCash.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin4_name").style.color = "#009600";
        }
        if (bitcoinCash.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin4_name").style.color = "#EE3B3B";
        }
    })
}

function yearData () {
    fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,BCH&tsyms=USD")
    .then(function (response) {
        let json = response.json();
        return json;
    })
    .then (function (myJson) {
    let data = myJson.DISPLAY;
    let bitcoin = data.BTC.USD;
    let litecoin = data.LTC.USD;
    let ethereum = data.ETH.USD;
    let bitcoinCash = data.BCH.USD;

    //24 hour percent change in coin value
    let bitcoinPercentChangeIn24 = bitcoin.CHANGEPCT24HOUR + "%";
    let litecoinPercentChangeIn24 = litecoin.CHANGEPCT24HOUR + "%";
    let ethereumPercentChangeIn24 = ethereum.CHANGEPCT24HOUR + "%";
    let bitcoinCashPercentChangeIn24 = bitcoinCash.CHANGEPCT24HOUR + "%";
  
    //Shows percent change in each h4 element
    document.getElementById("coin1_name").innerHTML = `Bitcoin, (BTC): ${bitcoinPercentChangeIn24}`; 
    document.getElementById("coin2_name").innerHTML = `Litecoin, (LTC): ${litecoinPercentChangeIn24}`;     
    document.getElementById("coin3_name").innerHTML = `Ethereum, (ETH): ${ethereumPercentChangeIn24}`;     
    document.getElementById("coin4_name").innerHTML = `Bitcoin Cash, (BCH): ${bitcoinCashPercentChangeIn24}`; 
    //Controls text color relative to percent
        if (bitcoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin1_name").style.color = "#009600";
        }
        if (bitcoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin1_name").style.color = "#EE3B3B";
        }
        if (litecoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin2_name").style.color = "#009600";
        }
        if (litecoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin2_name").style.color = "#EE3B3B";
        }
        if (ethereum.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin3_name").style.color = "#009600";
        }
        if (ethereum.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin3_name").style.color = "#EE3B3B";
        }
        if (bitcoinCash.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin4_name").style.color = "#009600";
        }
        if (bitcoinCash.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin4_name").style.color = "#EE3B3B";
        }
    })
}

// //Add event listener to each dropdown selector soime
// let USDselector = document.getElementById("USD");
// USDselector.addEventListener("click", changeCurrency);
// let CADselector = document.getElementById("CAD");
// CADselector.addEventListener("click", changeCurrency);
// let EUROselector = document.getElementById("EURO");
// EUROselector.addEventListener("click", changeCurrency);
// let KRWselector = document.getElementById("KRW");
// KRWselector.addEventListener("click", changeCurrency);
//     function changeCurrency () {
//         //Grab currency value
//         let currency = document.getElementById("currency").innerHTML;

//         if (currency === "Currency Selected: KRW") {
//             fiatKRW = true;
//             fiatUSD = false;
//             fiatCAD = false;
//             fiatEURO = false;
//             console.log("KRW");
//         } else if (currency === "Currency Selected: USD") {
//             fiatUSD = true;
//             fiatKRW = false;
//             fiatCAD = false;
//             fiatEURO = false;
//             console.log("USD");
//         } else if (currency === "Currency Selected: CAD") {
//             fiatCAD = true;
//             fiatKRW = false;
//             fiatUSD = false;
//             fiatEURO = false;
//             console.log("CAD");
//         } else if (currency === "Currency Selected: EURO") {
//             fiatEURO = true;            
//             fiatKRW = false;
//             fiatUSD = false;
//             fiatCAD = false;
//             console.log("EURO");
//         }

//     }


