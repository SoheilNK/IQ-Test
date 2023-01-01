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
    document.getElementById("alert").innerHTML = "Time is up, Please click next to go to the next question.";
    BtnNext.removeAttribute("disabled");
    InAnswer.setAttribute("disabled", "");
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
      // timerDiv.style.color = "red";
      // timerDiv.style.opacity = timerDiv.style.opacity == 0 ? 1 : 0;
      // timerDiv.style.opacity = 0;

    };
  }, 1000);
}
