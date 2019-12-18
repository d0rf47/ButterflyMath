userBool = true;
var greetBool=false;

//first loads
document.addEventListener("onload", greet())
function greet(){
  alert("Welcome To the Butterfly Math! \n Please provide your Name & age \n to record & view your final score!");
  greetBool = true;
}

var tempUsers=[];
var newUser;
var storedUsers=[];

//after greet
function register(){
if(greetBool && userBool){
  var name=(prompt("Enter First Name or Initials for LeaderBoard"));
  if(name != null){
  var age=(prompt("Enter your age"));
  }if(age != null){
  newUser= new userData(name, age, undefined, undefined, undefined); 
  userBool=false;
  if(newUser){
    greetBool=false;
var tempUsers=JSON.parse(localStorage.getItem("users")||"[]");
tempUsers.push(newUser);
localStorage.setItem("users", JSON.stringify(tempUsers));
}}}}

document.addEventListener("onload", register());


function userData(uName, age, misses, hits, level)
{
  this.userName=uName;
  this.age=age;
  this.numMisses=misses;
  this.numHits=hits;
  this.level=level;
  
};


