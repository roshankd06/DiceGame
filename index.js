var randomNumber1=Math.floor(Math.random()*6)+1;        //1-6

var randomDiceImage="dice" + randomNumber1 + ".png"     //image 1-6

var randomImageSource="images/" + randomDiceImage       //images/dice1.png - images/dice6.png

var image1=document.querySelectorAll("img")[0]          //for first player image
image1.setAttribute("src", randomImageSource)


//for 2nd player
var randomNumber2=Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png"

var randomImageSource2="images/" + randomDiceImage2

var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImageSource2)


//win conditions
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="DRAW!"
}