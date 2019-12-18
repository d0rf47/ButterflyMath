
let gameBegin = document.querySelector(".playGame");
let gameBody = document.querySelector(".gameBody");



let butterflyCount = 0;
let numberCount = 0;
let gameStarted = 0;

//Trackers

let totalScore = 0;
let totalHits = 0;
let totalMiss = 0;


//Important
let currentAnswer = 0;
let currentVal1 = 0;
let currentVal2 = 0;






let compareAnswer = (value)=>
{
  if(value == currentAnswer)
  {
    

    uniqueRandom();
    for (let j = 0; j < 10; j++)
    {
      document.querySelector(`#ranNumPos${j}`).innerHTML = `${numArray[j]}`;
    }
    generateQuestion();

    totalScore += 1000;
    totalHits += 1;
    document.querySelector(".score").innerHTML = ` Score: ${totalScore}`;
    document.querySelector(".hits").innerHTML = ` Hits: ${totalHits}`;



    //show checkmark
    document.querySelector(".check").style.opacity = 1;
    setTimeout(imageTimeout, 1000);
  }
  else
  {
    totalScore -= 1000;
    totalMiss += 1;
    document.querySelector(".score").innerHTML = ` Score: ${totalScore}`;
    document.querySelector(".miss").innerHTML = ` Misses: ${totalMiss}`;
    document.querySelector(".redX").style.opacity = 1;
    setTimeout(imageTimeout, 1000);
  }

}


let imageTimeout = ()=>
{
  document.querySelector(".check").style.opacity = 0;
  document.querySelector(".redX").style.opacity = 0;




}





//Addition

let generateQuestion = ()=>
{
  let good = 0;
  while(good == 0)
  {
    let value1 = Math.floor((Math.random() * 25) + 1);
    let value2 = Math.floor((Math.random() * 9) + 1);
    let total = value1 + value2;
    for(let y = 0; y < numArray.length; y++)
    {
      if(total == numArray[y])
      {
        good = 1;
        currentVal1 = value1;
        currentVal2 = value2;
        currentAnswer = total;
        document.querySelector(".questionBox").innerHTML = `What is ${currentVal1} + ${currentVal2} ?`;
      }
    }
  }

}


let numArray = [];

let uniqueRandom = ()=>{

  for (let x = 0; x < 10; x++)
  {
    let ranNum = 0;
    let good = 0;
    while(good == 0)
    {
      
      good = 1;
      ranNum = Math.floor((Math.random() * 33) + 1);
      for(let y = 0; y < numArray.length; y++)
      {
        if(ranNum == numArray[y])
        {
          good = 0;
          y += numArray.length;
        }
      }
    }
    numArray[x] = ranNum;

  }
}


//Mouse movement



let mainGame= ()=>
{
  if(gameStarted == 0)
  {


    //MouseMove
    document.querySelector(".net").style.opacity = 0.5;
    document.querySelector(".cloud").style.opacity = 1;
    document.addEventListener("mousemove", moveImage);
    function moveImage(e) {
      let mX = parseInt(e.clientX);
      let mY = parseInt(e.clientY);

    if((mX) < (screen.width - (screen.width / 8)))
    {
      document.querySelector(".net").style.left = (mX - 130) + 'px';
      document.querySelector(".questionBox").style.left = (mX - 65) + 'px';
      document.querySelector(".cloud").style.left = (mX - 77) + 'px';
    }
    if((mY) < (screen.height - (screen.height / 3.2)))
    {
      document.querySelector(".net").style.top = (mY -50) + 'px';
      document.querySelector(".questionBox").style.top = (mY +80) + 'px';
      document.querySelector(".cloud").style.top = (mY +10) + 'px';
    }

  }


    uniqueRandom();
    gameStarted = 1;
    let leftPos = 0;
    let topPos = 0;


    for(let x = 0; x < 10; x++)
    {

      let butterfly = document.createElement("img");
      butterfly.className = "butterflyProp";
      butterfly.id = `butterfly${butterflyCount}`;
      let whatButt = Math.floor((Math.random() * 3) + 1);
      butterfly.src = `/media/img/butterfly${whatButt}.png`;
      gameBody.appendChild(butterfly);
      butterflyCount += 1;


      let ranNumPos = document.createElement("p");
      ranNumPos.innerHTML = `${numArray[x]}`;
      ranNumPos.id = `ranNumPos${numberCount}`;
      ranNumPos.className = "ranNumProp";
      gameBody.appendChild(ranNumPos);
      numberCount += 1;
    }
    let movementCall = setInterval(movement, 10);
    let positionCall = setInterval(newPosition, 500);


    for(let x = 0; x < 10; x++)
    {
      document.querySelector(`#butterfly${x}`).addEventListener("click", function(){ compareAnswer(numArray[x])});
    }
    
    generateQuestion();
  }
}

let xPositionArray = [];
let yPositionArray = [];



let newPosition = ()=>
{
  for(let x = 0; x < 10; x++)
  {
    xPositionArray[x] = Math.floor(Math.random() * (3) - 1);
    yPositionArray[x] = Math.floor(Math.random() * (3) - 1);
  }

}






let movement = ()=>
{
  for(let x = 0; x < 10; x++)
  {
    
    let leftVal = parseInt(document.getElementById(`butterfly${x}`).offsetLeft);
    let topVal = parseInt(document.getElementById(`butterfly${x}`).offsetTop);
    
    let xMovement = parseInt(xPositionArray[x]);
    let yMovement = parseInt(yPositionArray[x]);

    if((leftVal + xMovement) > 0 && (leftVal + xMovement) < (screen.width - (screen.width / 3.7)))
    {
      leftVal += xMovement;
    }
    if((topVal + yMovement) > (screen.height / 5) && (topVal + yMovement) < (screen.height - (screen.height / 3.2)))
    {
      topVal += yMovement;
    }

    document.getElementById(`butterfly${x}`).style.left = leftVal + 'px';
    document.getElementById(`butterfly${x}`).style.top = topVal + 'px';
    document.getElementById(`ranNumPos${x}`).style.left = (leftVal + (screen.width / 22)) + 'px';
    document.getElementById(`ranNumPos${x}`).style.top = (topVal + (screen.height / 20)) + 'px';
    
  }
  
}

if(gameBegin)
{
  let gameFunction = gameBegin.addEventListener("click", mainGame);
}




// timer script below

let count = 90;
let display = document.querySelector(".timer");

let startButton = document.querySelector(".playGame");

let countdown = ()=>{
  let timer = setTimeout(countdown, 1000);
  count--;
  display.innerHTML =`Time: ${count}`;
  
  if(totalMiss >= 6){
   alert("YOU LOSE \n Too Many Misses! \n Please try Again \n Complete all 3 levels for a Final Score!");
   window.location="/"; 
  }
  if(count  < 1){
    let score ={
      hits: totalHits,
      miss: totalMiss
    };
    
    let scoreArr = [score];
    localStorage.setItem("Lvlscore", JSON.stringify(scoreArr));
   window.location="/levels/subtraction";
  }
}


startButton.addEventListener("click", countdown);
