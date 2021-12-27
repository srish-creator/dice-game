// For First Player

var randomnumber1=Math.floor(Math.random()*6+1);
var randomImage1="dice"+randomnumber1+".png";
var randomSource1="images/"+randomImage1;
var image =document.querySelectorAll("img")[0];
var dice1=image.setAttribute("src",randomSource1);

// for Second player
var randomnumber2=Math.floor(Math.random()*6+1);
var randomImage2="dice"+randomnumber2+".png";
var randomSource2="images/"+randomImage2;
var image =document.querySelectorAll("img")[1];
var dice2=image.setAttribute("src",randomSource2);
if(randomnumber1===randomnumber2)
{
    document.getElementsByTagName("h1")[0].textContent="Draw!";
}
else if(randomnumber1>randomnumber2)
{
    document.getElementsByTagName("h1")[0].textContent="Player 1 Wins";
}
else{
    document.getElementsByTagName("h1")[0].textContent="Player 2 Wins";
}