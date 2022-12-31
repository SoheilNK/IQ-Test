let myCounter;  //Counter for timer
let t;          //Timer set time

function timer(t) {

  clearInterval(myCounter); //to stop counter if already counting.
  // t = t + 3; //+3 seconds for reading the question
  myCounter = setInterval(() => {
  if (t <= 0) {
    console.log('completed');
    clearInterval(myCounter);
    document.getElementById("alert").innerHTML = "Time is up, Please click next to go to the next question.";
    BtnNext.removeAttribute("disabled");
    InAnswer.setAttribute("disabled", "");
  } else {
    t--;
    // console.log(t);
    // console.log('still going');
    let time = document.getElementById('time');
    time.innerHTML = t;
  }
  }, 1000);
}
