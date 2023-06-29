var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dices = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

document.querySelector("img.img1").src = dices[randomNumber1];
document.querySelector("img.img2").src = dices[randomNumber2];

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "🚩Draw!🚩"
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player1 Wins!"
}else{
    document.querySelector("h1").textContent = "Player2 Wins!🚩"
}