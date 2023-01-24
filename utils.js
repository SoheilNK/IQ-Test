let myCounter;  //Counter for timer
let t;          //Timer set time
let time = document.getElementById("time");
// let timerDiv = document.getElementById("timerDiv");
let remTime = document.getElementById("remTime");


function timer(t) {
  
  clearInterval(myCounter); //to stop counter if already counting.
  time.style.color = "black";
  remTime.style.color = "black";
  myCounter = setInterval(() => {
  if (t <= 0) {
    console.log('completed');
    clearInterval(myCounter);
    timerOut();
    
  } else {
    t--;
    time.style.opacity = 1;
    remTime.style.opacity = 1;
    // console.log(t);
    // console.log('still going');
    
    time.innerHTML = t;
    }
    if (t <= 9) {
      time.style.color = "red";
      remTime.style.color = "red";

      blink = setTimeout(() => {
        time.style.opacity = 0;
        remTime.style.opacity = 0;
      }, 500);
    };
  }, 1000);
}

function confirmExit() {
  let container = document.getElementById("container");
  container.className = "hidden";
  setTimeout(() => {
    r = confirm(
      "Are you Sure?\nIf you exit now, your progress will be lost and you have to start the test from the beginning."
    );
  }, 10); 

  setTimeout(() => {
    if (r) {
      container.className = "container";
      window.location.href = "index.html";
      return false;
    } else {
      container.className = "container";

      return;
    }
  }, 20);
  
  
  
}