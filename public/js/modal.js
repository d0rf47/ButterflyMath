//transions to leaderboard page
var seeLeaders = document.querySelector(".leaderBoard");
function scores(){
  window.location="/leaderboard"
}
seeLeaders.addEventListener("click",scores)




//RULE POPUP
var modal = document.getElementById("myModal");
var btn = document.getElementById("modButt");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// starts game
var startBut=document.querySelector("#startG");
function begin(){
  window.location="/levels/addition";
}
startBut.addEventListener("click",begin);
