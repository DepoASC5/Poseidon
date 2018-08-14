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
        const username= document.getElementById("username");
        const password= document.getElementById("password");
        const loginSubmitButton= document.getElementById("Login");
        const usernameArray=[];
        const passwordArray=[];
        const createAccountButton=document.getElementById("createAccountButton");
        userDatabase.on('child_added',storeUsernamesAndPassword);
        function storeUsernamesAndPassword(response){
            usernameArray.push(response.val().username);
            passwordArray.push(response.val().password);
         }
        loginSubmitButton.addEventListener('click',checkValues);
        function checkValues(){
            event.preventDefault();
            const tempUsername= username.value;
            const tempPassword=password.value;
             if(usernameArray.includes(tempUsername)&&passwordArray[usernameArray.indexOf(tempUsername)]===tempPassword){
                $("#loginPage").hide();
                $("#MainPage").show();
            }
            else{
                alert("THE USERNAME OR PASSWORD YOU ENTERED WAS INCORRECT");
                username.value="";
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
        const newBitcoin= document.getElementById("newBitcoin");
        const newEthereum= document.getElementById("newEthereum");
        const newBitcoinCash= document.getElementById("newBitcoinCash");
        const newLitecoin= document.getElementById("newLitecoin");
        const newCoinButton= document.getElementById("newCoinButton");
        const CAsubmitButton= document.getElementById("signUp");
        CAsubmitButton.addEventListener('click',createInfo);
        function createInfo(event){
            event.preventDefault();
            const tempCreateUsername= newUsername.value;
            const tempCreatePassword= newPassword.value;
            newPassword.value="";
            const user={
                username:tempCreateUsername,
                password:tempCreatePassword
            }
            userDatabase.push(user);
            $("#CoinForm").show();
            $("#signUpForm").hide();
            setCoin();
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
                newUsername.value="";
                newBitcoin.value="";
        newBitcoinCash.value="";
        newEthereum.value="";
        newLitecoin.value="";
        const coin={
            username: tempCoinUsername,
            bitcoin:tempBitcoin,
            ethereum:tempEthereum,
            litecoin:tempLitecoin,
            bitcoinCash:tempBitcoinCash
        };
        coinDatabase.push(coin);
        $("#createAccountPage").hide();
        $("#MainPage").show();
    }
}
}
}

const database= firebase.database().ref();
const userDatabase= firebase.database().ref("User");
const coinDatabase= firebase.database().ref("Coin");

$("#createAccountPage").hide();
$("#MainPage").hide();



JSstate.loginPage();
JSstate.createAccount();
JSstate.mainPage(); 

});

