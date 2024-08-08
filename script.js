let randomNumber = Math.floor(Math.random()*6)+1;
let randomImage = "dice"+randomNumber+".png";

var image1 = document.querySelectorAll("img")[0];
 
image1.setAttribute("src",randomImage);

let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomImage1 = "dice"+randomNumber1+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage1);

if (randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML="Player1 Win🥇"
}else if (randomNumber<randomNumber1){
    document.querySelector("h1").innerHTML="player2 Win🥇"
}else{
    document.querySelector("h1").innerHTML="Draw the Match 😊"
}