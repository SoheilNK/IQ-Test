function start() {
    let fname1 = document.getElementById("fname").value;
    let lname1 = document.getElementById("lname").value;
    let age1 = document.getElementById("age").value;
    localStorage.clear();
    localStorage.setItem("fname", fname1);
    localStorage.setItem("lname", lname1);
    localStorage.setItem("age", JSON.stringify(age1));
    localStorage.setItem("score1", JSON.stringify(0)); //score for section 1
    localStorage.setItem("score2", JSON.stringify(0)); //score for section 2
    localStorage.setItem("score3", JSON.stringify(0)); //score for section 3
}




// 

// //button
// const button = document.getElementById('btn');
// button.addEventListener('click', timer);
let myCounter;
function timer(t) {
    clearInterval(myCounter); //to stop counter if already counting.
    t = t + 3; //5 seconds for reading the question
  myCounter = setInterval(() => {
    if (t <= 0) {
      console.log('completed');
      clearInterval(myCounter);

    } else {
      console.log(t--);
      console.log('still going');
      let time = document.getElementById('time');
      time.innerHTML = t;
    }

  }, 1000);
};

//--------------------------Validate input-----------------------------
// document.getElementById("qs1").addEventListener('change', checkinput())
function checkinput() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("qs").value;
    points = JSON.parse(localStorage.getItem("score"));
    // If x is Not a positive Number
    let text;
    if (isNaN(x) || x < 0) {
        text = "Enter a positive number";
        points = points - 1;
        localStorage.setItem("score", JSON.stringify(points));
        document.getElementById("btnNext").disabled = true;
    } else {
        text = "Input OK";
        points = points + 1;
        localStorage.setItem("score", JSON.stringify(points));
        document.getElementById("btnNext").disabled = false;
    }
  document.getElementById("alert").innerHTML = text + "  " + points;
}

function nextQ() {
    document.getElementById("alert").innerHTML = "next question";
}