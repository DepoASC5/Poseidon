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

        //Current cash value for each coin
        let bitcoinPrice =  bitcoin.PRICE;
        let litecoinPrice = litecoin.PRICE;
        let ethereumPrice = ethereum.PRICE;
        let bitcoinCashPrice =  bitcoinCash.PRICE;

        //24 hour percent change in coin value
        let bitcoinPercentChangeIn24 = bitcoin.CHANGEPCT24HOUR + "%";
        let litecoinPercentChangeIn24 = litecoin.CHANGEPCT24HOUR + "%";
        let ethereumPercentChangeIn24 = ethereum.CHANGEPCT24HOUR + "%";
        let bitcoinCashPercentChangeIn24 = bitcoinCash.CHANGEPCT24HOUR + "%";
        //Shows price in each h3 element
        document.getElementById("bitcoin_price").innerHTML = `Current Price: ${bitcoinPrice}`; 
        document.getElementById("litecoin_price").innerHTML = `Current Price: ${litecoinPrice}`;     
        document.getElementById("ethereum_price").innerHTML = `Current Price: ${ethereumPrice}`;     
        document.getElementById("bitcoinCash_price").innerHTML = `Current Price: ${bitcoinCashPrice}`;     
        //Shows percent change in each h4 element
        document.getElementById("bitcoin_perIn24").innerHTML = `24 Hours: ${bitcoinPercentChangeIn24}`; 
        document.getElementById("litecoin_perIn24").innerHTML = `24 Hours: ${litecoinPercentChangeIn24}`;     
        document.getElementById("ethereum_perIn24").innerHTML = `24 Hours: ${ethereumPercentChangeIn24}`;     
        document.getElementById("bitcoinCash_perIn24").innerHTML = `24 Hours: ${bitcoinCashPercentChangeIn24}`; 
        //Controls background relative to percent
        if (bitcoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("bitcoin_container").style.background = "#00ff00";
        } else if (bitcoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("bitcoin_container").style.background = "#dc143c";
        }
        if (litecoin.CHANGEPCT24HOUR > 0) {
            document.getElementById("litecoin_container").style.background = "#00ff00";
        } else if (litecoin.CHANGEPCT24HOUR < 0) {
            document.getElementById("litecoin_container").style.background = "#dc143c";
        }
        if (ethereum.CHANGEPCT24HOUR > 0) {
            document.getElementById("ethereum_container").style.background = "#00ff00";
        } else if (ethereum.CHANGEPCT24HOUR < 0) {
            document.getElementById("ethereum_container").style.background = "#dc143c";
        }
        if (bitcoinCash.CHANGEPCT24HOUR > 0) {
            document.getElementById("bitcoinCash_container").style.background = "#00ff00";
        } else if (bitcoinCash.CHANGEPCT24HOUR < 0) {
            document.getElementById("bitcoinCash_container").style.background = "#dc143c";
        }
    
    })