var globalBitcoinValue;
var globalLitecoinValue;
var globalEthereumValue;
var globalBitcoinCashValue;


//Default display
fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,BCH&tsyms=USD")
    .then(function (response) {
        let json = response.json();
        console.log(json);
        return json;
    })
    .then (function (myJson) {
    let data = myJson.DISPLAY;
    let bitcoin = data.BTC.USD;
    let litecoin = data.LTC.USD;
    let ethereum = data.ETH.USD;
    let bitcoinCash = data.BCH.USD;
    
    //Current price
    let bitcoinPrice = bitcoin.PRICE;
    let litecoinPrice = litecoin.PRICE;
    let ethereumPrice = ethereum.PRICE;
    let bitcoinCashPrice = bitcoinCash.PRICE;
    //Pushs price to default page
    document.getElementById("bitcoin_price").innerHTML = `Current Price: ${bitcoinPrice}`;
    document.getElementById("litecoin_price").innerHTML = `Current Price: ${litecoinPrice}`;
    document.getElementById("ethereum_price").innerHTML = `Current Price: ${ethereumPrice}`;
    document.getElementById("bitcoinCash_price").innerHTML = `Current Price: ${bitcoinCashPrice}`;

    //24 hour percent change in coin value
    let bitcoinPercentChangeIn24 = bitcoin.CHANGEPCT24HOUR + "%";
    let litecoinPercentChangeIn24 = litecoin.CHANGEPCT24HOUR + "%";
    let ethereumPercentChangeIn24 = ethereum.CHANGEPCT24HOUR + "%";
    let bitcoinCashPercentChangeIn24 = bitcoinCash.CHANGEPCT24HOUR + "%";
  
    //Shows percent change in each h4 element
    document.getElementById("coin1_name").innerHTML += bitcoinPercentChangeIn24; 
    document.getElementById("coin2_name").innerHTML += litecoinPercentChangeIn24;     
    document.getElementById("coin3_name").innerHTML += ethereumPercentChangeIn24;     
    document.getElementById("coin4_name").innerHTML += bitcoinCashPercentChangeIn24; 
    //Controls text color relative to percent
        if (bitcoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin1_name").style.color = "#00ff00";
        } else if (bitcoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin1_name").style.color = "#EE3B3B";
        }
        if (litecoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin2_name").style.color = "#00ff00";
        } else if (litecoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin2_name").style.color = "#EE3B3B";
        }
        if (ethereum.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin3_name").style.color = "#00ff00";
        } else if (ethereum.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin3_name").style.color = "#EE3B3B";
        }
        if (bitcoinCash.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin4_name").style.color = "#00ff00";
        } else if (bitcoinCash.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin4_name").style.color = "#EE3B3B";
        }
    })

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
    fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,BCH&tsyms=USD")
    .then(function (response) {
        let json = response.json();
        console.log(json);
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
            document.getElementById("coin1_name").style.color = "#00ff00";
        } else if (bitcoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin1_name").style.color = "#EE3B3B";
        }
        if (litecoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin2_name").style.color = "#00ff00";
        } else if (litecoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin2_name").style.color = "#EE3B3B";
        }
        if (ethereum.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin3_name").style.color = "#00ff00";
        } else if (ethereum.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin3_name").style.color = "#EE3B3B";
        }
        if (bitcoinCash.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin4_name").style.color = "#00ff00";
        } else if (bitcoinCash.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin4_name").style.color = "#EE3B3B";
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
    console.log("Day Data");
}

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
        if (bitcoin7DayPercentChange> 0) {
            document.getElementById("coin1_name").style.color = "#00ff00";
        } else if (bitcoin7DayPercentChange< 0) {
            document.getElementById("coin1_name").style.color = "#EE3B3B";
        }
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
        if (litecoin7DayPercentChange > 0) {
            document.getElementById("coin2_name").style.color = "#00ff00";
        } else if (litecoin7DayPercentChange < 0) {
            document.getElementById("coin2_name").style.color = "#EE3B3B";
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
        if (ethereum7DayPercentChange > 0) {
            document.getElementById("coin3_name").style.color = "#00ff00";
        } else if (ethereum7DayPercentChange < 0) {
            document.getElementById("coin3_name").style.color = "#EE3B3B";
        }
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
        if (bitcoinCash7DayPercentChange > 0) {
            document.getElementById("coin4_name").style.color = "#00ff00";
        } else if (bitcoinCash7DayPercentChange < 0) {
            document.getElementById("coin4_name").style.color = "#EE3B3B";
        }
    })
    
    console.log("Week Data");    
}

function monthData () {
    fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,BCH&tsyms=USD")
    .then(function (response) {
        let json = response.json();
        console.log(json);
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
            document.getElementById("coin1_name").style.color = "#00ff00";
        } else if (bitcoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin1_name").style.color = "#EE3B3B";
        }
        if (litecoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin2_name").style.color = "#00ff00";
        } else if (litecoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin2_name").style.color = "#EE3B3B";
        }
        if (ethereum.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin3_name").style.color = "#00ff00";
        } else if (ethereum.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin3_name").style.color = "#EE3B3B";
        }
        if (bitcoinCash.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin4_name").style.color = "#00ff00";
        } else if (bitcoinCash.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin4_name").style.color = "#EE3B3B";
        }
    })
    console.log("Month Data");
}

function yearData () {
    fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,BCH&tsyms=USD")
    .then(function (response) {
        let json = response.json();
        console.log(json);
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
            document.getElementById("coin1_name").style.color = "#00ff00";
        } else if (bitcoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin1_name").style.color = "#EE3B3B";
        }
        if (litecoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin2_name").style.color = "#00ff00";
        } else if (litecoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin2_name").style.color = "#EE3B3B";
        }
        if (ethereum.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin3_name").style.color = "#00ff00";
        } else if (ethereum.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin3_name").style.color = "#EE3B3B";
        }
        if (bitcoinCash.CHANGEPCT24HOUR > 0) {
            document.getElementById("coin4_name").style.color = "#00ff00";
        } else if (bitcoinCash.CHANGEPCT24HOUR < 0) {
            document.getElementById("coin4_name").style.color = "#EE3B3B";
        }
    })
    console.log("Year Data");
}

// //Grabs buttons for more info
// const bitcoinMoreInfo = document.getElementById("bitcoinMoreInfo");
// const litecoinMoreInfo = document.getElementById("litecoinMoreInfo");
// const ethereumMoreInfo = document.getElementById("ethereumMoreInfo");
// const bitcoinCashMoreInfo = document.getElementById("bitcoinCashMoreInfo");

// //Different info for different coins
// bitcoinMoreInfo.addEventListener("click", bitcoinInfo);
// litecoinMoreInfo.addEventListener("click", litecoinInfo);
// ethereumMoreInfo.addEventListener("click", ethereumInfo);
// bitcoinCashMoreInfo.addEventListener("click", bitcoinCashInfo);

// function bitcoinInfo () {
//     document.getElementById("bitcoinGraph").src = ""
// }

// function litecoinInfo () {
//     window.location.href = 'More Info Files\litecoinData.html';
// }

// function ethereumInfo () {
//     window.location.href = 'More Info Files\ethereumData.html';
// }

// function bitcoinCashInfo () {
//     window.location.href = 'More Info Files\
//     bitcoinCashData.html';
// }

