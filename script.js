var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dices = ["image/dice1.png", "image/dice2.png", "image/dice3.png", "image/dice4.png", "image/dice5.png", "image/dice6.png"];

document.querySelector("img.img1").src = dices[randomNumber1];
document.querySelector("img.img2").src = dices[randomNumber2];

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "🚩Draw!🚩"
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player1 Wins!"
}else{
    document.querySelector("h1").textContent = "Player2 Wins!🚩"
}