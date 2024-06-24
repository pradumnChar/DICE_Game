function result() { 
    var player1 = Math.floor(Math.random()*6+1);
    var player2 = Math.floor(Math.random()*6+1);
    var first = "dice" + player1 + ".png";
    var second = "dice" + player2 + ".png";
    var imageSource = "images/"+first;
    var imageSourcee = "images/"+second;
    // var image1= document.querySelectorAll("img")[0]
    // const images= [dice1,dice2,dice3,dice4,dice5,dice6];
    if(player1 === player2)
    {
        d.innerHTML="DRAW !!!!!";      
        document.querySelectorAll("img")[0].setAttribute("src",imageSource);
        document.querySelectorAll("img")[1].setAttribute("src",imageSourcee);
    }//[0]-means to tap into img1 that is to change first dice image
    else if(player1 > player2)
    {
        d.innerHTML="Player 1 Wins !!!!!!";
        document.querySelectorAll("img")[0].setAttribute("src",imageSourceI);
        document.querySelectorAll("img")[1].setAttribute("src",imageSourcee);
    }
    else
    {
        d.innerHTML="Player 2 Wins !!!!!!!";
        document.querySelectorAll("img")[0].setAttribute("src",imageSource);
        document.querySelectorAll("img")[1].setAttribute("src",imageSourcee);
    } 
 };
// function ok(){
//     location.reload()
// }
var d = document.getElementById("me");
d.addEventListener("click",result());
// d.result();
