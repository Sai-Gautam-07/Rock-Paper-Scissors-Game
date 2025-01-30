var play=["scissors","rock","paper"];

var num=Math.random();
var randomPlay=Math.floor(num*3);
var randomChosenPlay=play[randomPlay];
document.querySelector("#bot").classList.add(randomChosenPlay);
switch(randomChosenPlay){
    case "paper":
        document.querySelector("h1").innerHTML="You Win...🎉";
        break;
    case "rock":
        document.querySelector("h1").innerHTML="You Lose...😔";
        break;
    case "scissors":
        document.querySelector("h1").innerHTML="Draw...🤝";
        break;
}
function back(){
    location.replace("index.html");
  }
