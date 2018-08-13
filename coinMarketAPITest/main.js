//This uses the CoinMarketCap Public API to track Bitcoin, Bitcoin Cash, Ethereum and Litecoin currencies
//Bitcoin has an ID of 1
//Bitcoin Cash has an ID of 1831
//Ethereum has an ID of 1027
//Litecoin has an ID of 2
let container1 = document.getElementById("cryptoOne");
let container2 = document.getElementById("cryptoTwo");
let container3 = document.getElementById("cryptoThree");
let container4 = document.getElementById("cryptoFour");
let newHeader1 = document.createElement("h2");
let newSubHeader1 = document.createElement("h3");
let newSubSubHeader1 = document.createElement("h4");
let newHeader2 = document.createElement("h2");
let newSubHeader2 = document.createElement("h3");
let newSubSubHeader2 = document.createElement("h4");
let newHeader3 = document.createElement("h2");
let newSubHeader3 = document.createElement("h3");
let newSubSubHeader3 = document.createElement("h4");
let newHeader4 = document.createElement("h2");
let newSubHeader4 = document.createElement("h3");
let newSubSubHeader4 = document.createElement("h4");
let lineBreak1 = document.createElement("br");
let lineBreak2 = document.createElement("br");
let lineBreak3 = document.createElement("br");
let lineBreak4 = document.createElement("br");

// Bitcoin
fetch("https://api.coinmarketcap.com/v2/ticker/1/")
    .then (function (response) {
        let json = response.json();
        return json;
    })
    .then(function (myJson) {
        //Grabs json object and publishes to HTML Site with DOM stuff
        let results = myJson;
        let cryptoData = results.data;
        let cryptoName = cryptoData.name;
        let cryptoSymbol = cryptoData.symbol;
        let currentPrice = cryptoData.quotes.USD.price;
        let changeIn24 = cryptoData.quotes.USD.percent_change_24h;
        newHeader1.innerHTML = `${cryptoName}, (${cryptoSymbol})`;
        newSubHeader1.innerHTML = `Current Price: $${currentPrice}`;
        newSubSubHeader1.innerHTML = `24 Hours: ${changeIn24}%`;
        container1.appendChild(newHeader1);
        container1.appendChild(newSubHeader1);
        container1.appendChild(lineBreak1);
        container1.appendChild(newSubSubHeader1);
        //Changes border color based on coin performance
        if (changeIn24 > 0) {
            container1.style.borderColor = "green";
            newSubSubHeader1.innerHTML = `24 Hours: +${changeIn24}%`;
        } else if (changeIn24 < 0) {
            container1.style.borderColor = "red";
        }
    })
//Litecoin
fetch("https://api.coinmarketcap.com/v2/ticker/2/")
    .then (function (response) {
        let json = response.json();
        return json;
    })
    .then(function (myJson) {
        //Grabs json object and publishes to HTML Site with DOM stuff
        let results = myJson;
        let cryptoData = results.data;
        let cryptoName = cryptoData.name;
        let cryptoSymbol = cryptoData.symbol;
        let currentPrice = cryptoData.quotes.USD.price;
        let changeIn24 = cryptoData.quotes.USD.percent_change_24h;
        newHeader2.innerHTML = `${cryptoName}, (${cryptoSymbol}) `;
        newSubHeader2.innerHTML = `Current Price: $${currentPrice}`;
        newSubSubHeader2.innerHTML = `24 Hours: ${changeIn24}%`;
        container2.appendChild(newHeader2);
        container2.appendChild(newSubHeader2);
        container2.appendChild(lineBreak2);
        container2.appendChild(newSubSubHeader2);
        //Changes border color based on coin performance
        if (changeIn24 > 0) {
            container2.style.borderColor = "green";
            newSubSubHeader2.innerHTML = `24 Hours: +${changeIn24}%`;
        } else if (changeIn24 < 0) {
            container2.style.borderColor = "red";
        }
    })

//Ethereum
fetch("https://api.coinmarketcap.com/v2/ticker/1027/")
    .then (function (response) {
        let json = response.json();
        return json;
    })
    .then(function (myJson) {
        //Grabs json object and publishes to HTML Site with DOM stuff
        let results = myJson;
        let cryptoData = results.data;
        let cryptoName = cryptoData.name;
        let cryptoSymbol = cryptoData.symbol;
        let currentPrice = cryptoData.quotes.USD.price;
        let changeIn24 = cryptoData.quotes.USD.percent_change_24h;
        newHeader3.innerHTML = `${cryptoName}, (${cryptoSymbol}) `;
        newSubHeader3.innerHTML = `Current Price: $${currentPrice}`;
        newSubSubHeader3.innerHTML = `24 Hours: ${changeIn24}%`;
        container3.appendChild(newHeader3);
        container3.appendChild(newSubHeader3);
        container3.appendChild(lineBreak3);
        container3.appendChild(newSubSubHeader3);
        //Changes border color based on coin performance
        if (changeIn24 > 0) {
            container3.style.borderColor = "green";
            newSubSubHeader3.innerHTML = `24 Hours: +${changeIn24}%`;
        } else if (changeIn24 < 0) {
            container3.style.borderColor = "red";
        }
    })

//Bitcoin Cash
fetch("https://api.coinmarketcap.com/v2/ticker/1831/")
    .then (function (response) {
        let json = response.json();
        return json;
    })
    .then(function (myJson) {
        //Grabs json object and publishes to HTML Site with DOM stuff
        let results = myJson;
        let cryptoData = results.data;
        let cryptoName = cryptoData.name;
        let cryptoSymbol = cryptoData.symbol;
        let currentPrice = cryptoData.quotes.USD.price;
        let changeIn24 = cryptoData.quotes.USD.percent_change_24h;
        newHeader4.innerHTML = `${cryptoName}, (${cryptoSymbol}) `;
        newSubHeader4.innerHTML = `Current Price: $${currentPrice}`;
        newSubSubHeader4.innerHTML = `24 Hours: ${changeIn24}%`;
        container4.appendChild(newHeader4);
        container4.appendChild(newSubHeader4);
        container4.appendChild(lineBreak4);
        container4.appendChild(newSubSubHeader4);
        //Changes border color based on coin performance
        if (changeIn24 > 0) {
            container4.style.borderColor = "green";
            newSubSubHeader4.innerHTML = `24 Hours: +${changeIn24}%`;
        } else if (changeIn24 < 0) {
            container4.style.borderColor = "red";
        }
    })
