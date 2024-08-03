function createBubble(){

var add = "";
for(var i = 1; i<=105; i++){
    var randomnum = Math.floor(Math.random()*10);
    add += `  <div class="bubble">${randomnum}</div> `
}
document.querySelector("#pbtm").innerHTML = add;
};

var timer = 60;
function timing(){
    var hittimer = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(hittimer);
            document.querySelector("#pbtm").innerHTML =` <div class="playAgain">
            <img src="playAgain.png" alt="" srcset="">
        </div>`;
        document.querySelector("#pbtm").style.backgroundColor = "transparent";
        document.querySelector("#hit").style.display = "none"
        document.querySelector("#timer").style.display = "none"

        }
    }, 1000)
}
var randomHit; 
function gethit(){
     randomHit = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = randomHit;
}

var score = 0;
function hitscore(){
    score += 2;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === randomHit){
        hitscore();
        createBubble();
        gethit();
    }
})






gethit();
timing();
createBubble();

