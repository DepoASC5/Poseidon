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
        CAloginButton.addEventListener('click', function(event){
            event.preventDefault();
            $("#loginPage").show();
            $("#createAccountPage").hide();
        });
        CAsubmitButton.addEventListener('click',createInfo);
        function createInfo(event){
            event.preventDefault();
            if(newPassword.value===conPassword.value){
            const tempUsername=newUsername.value;
            const tempCreatePassword=newPassword.value;
            const tempEmail=newEmail.value;
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
        else{
            alert("You're passwords do not match.");
            newPassword.value="";
            conPassword.value="";
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
            if(userCoin.username===emailOrUsername.value){
                console.log("purple");
               const bitcoinDiv= `My Coins: ${userCoin.bitcoin}`;
               const ethereumDiv= `My Coins: ${userCoin.ethereum}`;
               const bitcoinCashDiv= `My Coins: ${userCoin.bitcoinCash}`;
               const litecoinDiv= `My Coins: ${userCoin.litecoin}`;

               $("#myCoinAmount").text(bitcoinDiv);
               $("#litecoinAmount").text(litecoinDiv); 
               $("#bitcoinCashAmount").text(ethereumDiv);
               $("#ethereumAmount").text(bitcoinCashDiv);
                
            }
        })
}


});
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

