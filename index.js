var firstNumber = Math.floor(Math.random() * 6) + 1 ;
var secondNumber = Math.floor(Math.random()* 6) + 1 ;

var randomDice1 = "images/dice"+firstNumber+".png";
var randomDice2 = "images/dice"+secondNumber+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDice1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDice2);


if (randomDice1 > randomDice2){
  document.querySelector("h1").textContent = "🏆 Player 1 Won!";
}else if (randomDice1 < randomDice2) {
  document.querySelector("h1").textContent = "Player 2 Won! 🏆 ";
}else{
  document.querySelector("h1").textContent = "Tied!!!";
}
