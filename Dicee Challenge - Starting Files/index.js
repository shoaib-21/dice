var randomNumber1 = Math.floor((Math.random()*6)+1);
var img1Src = "./images/dice" + randomNumber1 + ".png";


var randomNumber2 = Math.floor((Math.random()*6)+1);
var img2Src = "./images/dice" + randomNumber2 + ".png";


    document.getElementsByClassName("img1")[0].setAttribute("src",img1Src);

    document.getElementsByClassName("img2")[0].setAttribute("src",img2Src);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}

else if( randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}

else {
    document.querySelector("h1").innerHTML = "draw";
}