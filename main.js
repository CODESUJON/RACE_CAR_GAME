var bluecar = document.getElementById("bluecar");
var racecar =document.getElementById("racecar")
var result = document.getElementById("result")
const score =  document.getElementById("score")
var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")

//bluecar move
bluecar.addEventListener("animationiteration",function(){
    var random =((Math.floor(Math.random() * 3)) * 130)
    bluecar.style.left=random + "px"
    counter++
})

//racecar move
window.addEventListener("keydown", function(e){
   if(e.keyCode == "39"){ var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
    if(racecarleft < 260){racecar.style.left=(racecarleft + 130) +"px"}
    jumpsound.onplay()
};

    if(e.keyCode =="37"){
        var racecarleft = parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"))
        if(racecarleft > 0){racecar.style.left=(racecarleft - 130) +"px"};
        jumpsound.onplay()

    }
})

//Game over
setInterval(function Gameover (){
    var bluecarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
    var bluecarLeft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
        if((bluecarLeft === racecarLeft) && (bluecarTop > 250) && (bluecarTop < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)