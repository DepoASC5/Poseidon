$(document).ready(function(){
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPj7fgN6VNMGsnyOWowJs_T5hJQfqxsJE",
    authDomain: "poseidon-305fa.firebaseapp.com",
    databaseURL: "https://poseidon-305fa.firebaseio.com",
    projectId: "poseidon-305fa",
    storageBucket: "poseidon-305fa.appspot.com",
    messagingSenderId: "21476093727"
  };
  firebase.initializeApp(config);
const JSstate={
    loginPage:function(){
        const emailOrUsername= document.getElementById("emailOrUsername");
        const password= document.getElementById("password");
        const loginSubmitButton= document.getElementById("Login");
        const loginArray=[];
        const emailArray=[];
        const passwordLoginArray=[];
        const passwordEmailArray=[];

        const createAccountButton=document.getElementById("createAccountButton");
        userDatabase.on('child_added',storeUsernamesAndPassword);
        function storeUsernamesAndPassword(response){
            loginArray.push(response.val().username);
            emailArray.push(response.val().email);
            passwordLoginArray.push(response.val().password);
            passwordEmailArray.push(response.val().password);
         }
        loginSubmitButton.addEventListener('click',checkValues);
        function checkValues(){
            event.preventDefault();
            const templogin= emailOrUsername.value;
            const tempPassword=password.value;
             if(loginArray.includes(templogin)&&passwordLoginArray[loginArray.indexOf(templogin)]===tempPassword||emailArray.includes(templogin)&&passwordEmailArray[emailArray.indexOf(templogin)]===tempPassword){
                $("#loginPage").hide();
                $("#MainPage").show();
                mainPage();
            }
            else{
                alert("THE USERNAME OR PASSWORD YOU ENTERED WAS INCORRECT");
                emailOrUsername.value="";
                password.value="";
            }
        }
        createAccountButton.addEventListener('click',function(event){
            event.preventDefault();
            $("#loginPage").hide();
            $("#createAccountPage").show();
         })
    },
    mainPage:function(){
        
    },
    createAccount:function(){
        const newUsername= document.getElementById("newUsername");
        const newPassword= document.getElementById("newPassword");
        const newEmail= document.getElementById("newEmail");
        const conPassword= document.getElementById("confirmPassword");
        const newBitcoin= document.getElementById("newBitcoin");
        const newEthereum= document.getElementById("newEthereum");
        const newBitcoinCash= document.getElementById("newBitcoinCash");
        const newLitecoin= document.getElementById("newLitecoin");
        const newCoinButton= document.getElementById("newCoinButton");
        const CAsubmitButton= document.getElementById("signUp");
        const CAloginButton=document.getElementById("goBack");
        const newLoginArray=[];
        const newEmailArray=[];
        
        userDatabase.on('child_added', storeNewUsernamesAndPassword);
        function storeNewUsernamesAndPassword(response){
            newLoginArray.push(response.val().username);
            newEmailArray.push(response.val().email);
        }
        CAloginButton.addEventListener('click', function(event){
            event.preventDefault();
            $("#loginPage").show();
            $("#createAccountPage").hide();
        });
        
        CAsubmitButton.addEventListener('click',createInfo);
        function createInfo(event){
            event.preventDefault();
        if(newPassword.value===conPassword.value&&newLoginArray.includes(newUsername.value)===false&&newEmailArray.includes(newEmail.value)===false){
            const tempUsername=newUsername.value;
            const tempEmail=newEmail.value;
            const tempCreatePassword=newPassword.value;
            newPassword.value="";
            const user={
                username:tempUsername,
                email:tempEmail,
                password:tempCreatePassword,
            }
            userDatabase.push(user);
            $("#CoinForm").show();
            $("#signUpForm").hide();
            setCoin();
        }
        else if(newPassword.value!=conPassword.value){
            alert("You're passwords do not match.");
            newPassword.value="";
            conPassword.value="";
        }
        else if(newEmailArray.includes(newEmail.value)===true){
            alert("You're email is already being used.");
            newEmail.value="";
        }
        else if(newLoginArray.includes(newUsername.value)===true){
            alert("You're username is already taken.");
            newUsername.value="";

        }
        }
        function setCoin() {
            newCoinButton.addEventListener('click',submitCoin);
            function submitCoin(event){
                event.preventDefault()
                const tempBitcoin=newBitcoin.value;
                const tempEthereum=newEthereum.value;
                const tempLitecoin=newLitecoin.value;
                const tempBitcoinCash=newBitcoinCash.value;
                const tempCoinUsername= newUsername.value;
                const tempCoinEmail=newEmail.value;
                newUsername.value="";
                newBitcoin.value="";
                newBitcoinCash.value="";
                newEthereum.value="";
                newLitecoin.value="";
                const coin={
                    username: tempCoinUsername,
                    email:tempCoinEmail,
                    bitcoin:tempBitcoin,
                    ethereum:tempEthereum,
                    litecoin:tempLitecoin,
                    bitcoinCash:tempBitcoinCash
                };
                coinDatabase.push(coin);
                $("#createAccountPage").hide();
                $("#MainPage").show();
                mainPage();
    
    }
}
}
}

const database= firebase.database().ref();
const userDatabase= firebase.database().ref("User");
const coinDatabase= firebase.database().ref("Coin");
$("#CoinForm").hide();
$("#createAccountPage").hide();
$("#MainPage").hide();



JSstate.loginPage();
JSstate.createAccount();
function mainPage(){

        coinDatabase.on("child_added",function(response){
            const userCoin=response.val();
            const bitcoinDiv= userCoin.bitcoin;
            const ethereumDiv=  userCoin.ethereum;
            const bitcoinCashDiv= userCoin.bitcoinCash;
            const litecoinDiv= userCoin.litecoin;
            if(userCoin.username===emailOrUsername.value){

               $("#myCoinAmount").text(bitcoinDiv);
               $("#litecoinAmount").text(litecoinDiv); 
               $("#bitcoinCashAmount").text(ethereumDiv);
               $("#ethereumAmount").text(bitcoinCashDiv);
            coinAssembly(bitcoinCashDiv,bitcoinDiv,ethereumDiv,litecoinDiv);
            }
        })
}


// Settings dropdown stuff
$("#CAD").click(function(){
    $("#currency").text("Currency Selected: CAD");
});
$("#EURO").click(function(){
    $("#currency").text("Currency Selected: EURO");
});
$("#KRW").click(function(){
    $("#currency").text("Currency Selected: KRW");
});
$("#USD").click(function(){
    $("#currency").text("Currency Selected: USD");
});

//Grab Cash VALUES
function coinAssembly (bc,b,e,l) {

//Result of cashValue*current price = final
let myCoinAccount = $("#cashValue");
let litecoinAccount = $("#litecoincashValue");
let ethereumAccount = $("#ethereumcashValue");
let bitcoinCashAccount = $("#bitcoinCashcashValue");

myCoinAccount.text(`Cash Value: $${Number((cashValue(myCoinAccount)*b).toFixed(2)).toLocaleString('en-GB')}`);
litecoinAccount.text(`Cash Value: $${Number((cashValue(litecoinAccount)*l).toFixed(2)).toLocaleString('en-GB')}`);
ethereumAccount.text(`Cash Value: $${Number((cashValue(ethereumAccount)*e).toFixed(2)).toLocaleString('en-GB')}`);
bitcoinCashAccount.text(`Cash Value: $${Number((cashValue(bitcoinCashAccount)*bc).toFixed(2)).toLocaleString('en-GB')}`);
function cashValue (coinName) {
    //Gets rid of dollar sign
    let num = coinName.text().substr(2);
    //Turns into number
    let final = parseFloat(num.replace(/,/g , ""));
    return final;
}


function commafy(num) {
    num.toString().replace( /\B(?=(?:\d{3})+)$/g, "," );
  }
}

});