const BtnNext = document.getElementById("btnNext");
const InAnswer = document.getElementById("answer");

let q = 3; //Start with question #3
let qText; //question text
let qTime; //question allowed time
let qAnswer; //correct answer for a question
let aTime; //received answer time for a question
let aGet; //received answer for a question
let aPoint; //received point for a question
let rTime; //remaining time for a question
let question; //current question
let totalSec1 = 0; //final points for section1
let errCount = 0; //counts number of consecutive errors

BtnNext.addEventListener("click", nextQ);
InAnswer.addEventListener("keyup", handleAnswerChange);
InAnswer.addEventListener("change", console.log("answer change"));

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

//------------------------ section 1 data -------Start------------
const sec1 = [
  (q1 = {
    questionText: "How many cubes are there in this figure?",
    questionTime: 15,
    questionAnswer: 7,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q2 = {
    questionText:
      "Suzi has three books.  She lends one of them to her friend. How many books does she have now?",
    questionTime: 15,
    questionAnswer: 2,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q3 = {
    questionText:
      "Lee has four blankets. He buys five more. How many blankets does he have altogether?",
    questionTime: 15,
    questionAnswer: 9,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q4 = {
    questionText:
      "If a person buys a six-dollar ice cream and gives ten dollars cash to the cashier, how much should they get back in dollars?",
    questionTime: 15,
    questionAnswer: 4,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q5 = {
    questionText:
      "A newspaper salesman sold six newspapers. Each newspaper costs twenty-five cents. How much money did he make in cents?",
    questionTime: 30,
    questionAnswer: 150,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q6 = {
    questionText: "One and a half metres is equal to how many centimetres?",
    questionTime: 30,
    questionAnswer: 150,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q7 = {
    questionText:
      "How many oranges could you buy with thirty-six dollars if each orange was six dollars?", // "...if each orange were six dollars"
    questionTime: 30,
    questionAnswer: 6,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q8 = {
    questionText:
      "Sara runs three miles per hour. How long does it take her to run twenty-four miles?", // "How many hours does it take her..."
    questionTime: 30,
    questionAnswer: 8,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q9 = {
    questionText:
      "If Megan buys seven postage stamps which costs three dollars each and she pays fifty dollars to the cashier, how much change should she receive in dollars?",
    questionTime: 30,
    questionAnswer: 29,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q10 = {
    questionText:
      "Liam had one hundred and eighty dollars and spent seventy-five dollars. How much money does he have left? ", // How much money in dollars does he have left?
    questionTime: 30,
    questionAnswer: 105,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q11 = {
    questionText:
      "The price of a pair of cans is thirty-one dollars. How much does a dozen cost?", // "...in dollars?"
    questionTime: 60,
    questionAnswer: 186,
    rewardTime: 10,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q12 = {
    questionText:
      "Hasan bought a secondhand couch. He paid two thirds of the original price. He paid four thousand dollars. How much was the original price in dollars?",
    questionTime: 60,
    questionAnswer: 6000,
    rewardTime: 10,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q13 = {
    questionText:
      "Suzi earns four hundred dollars gross weekly. If the tax rate is fifteen percent, how much does she take home weekly?", //...in dollars?
    questionTime: 60,
    questionAnswer: 340,
    rewardTime: 15,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
  (q14 = {
    questionText:
      "How many workers will be needed to complete a task in half a day when it takes six days for eight workers to complete the same task?",
    questionTime: 120,
    questionAnswer: 96,
    rewardTime: 20,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  }),
];
//------------------------ section 1 data -------End------------

function showQuestion(qn) {
  question = sec1[qn - 1];
  qText = question.questionText;
  qTime = question.questionTime;
  qAnswer = question.questionAnswer;
  rTime = question.rewardTime;
  document.getElementById("alert").innerHTML = "";
  document.getElementById("question").innerHTML = qText;
  if (qn == 1) {
    qText =
      qText + '   <img src="static/sec01_q01.png" alt="cubes" width="600">';
    document.getElementById("question").innerHTML = qText;
  }

  timer(qTime);

  console.log("q" + q + "     = ", qText);
  console.log("Time:            ", qTime);
  console.log("Answer:          ", qAnswer);
}

//--------------------------Validate input-----------Start-------

const checkAnswerValidation = (aGet) => !isNaN(aGet) && aGet !== 0;

function handleAnswerChange(event) {
  // Get the value of the input field with id="answer"
  aGet = Number(event.target.value);
  console.log(aGet);
  console.log(typeof aGet);

  const hasValidAnswer = checkAnswerValidation(aGet);

  if (hasValidAnswer) {
    BtnNext.removeAttribute("disabled");
    document.getElementById("alert").setAttribute("style", "color : blue");
    document.getElementById("alert").innerHTML =
      "Please click next to go to the next question.";
  } else {
    BtnNext.setAttribute("disabled", "");
    document.getElementById("alert").setAttribute("style", "color : red");
    document.getElementById("alert").innerHTML =
      "Please enter a number greater than zero.";
  }
  if (event.keyCode === 13) {
    BtnNext.click();
  }
}
//--------------------------Validate input-----------End-------
//--------------------------handle button click------Start-------

function nextQ() {
  clearInterval(myCounter);
  calculate_points();
  gotoNextQ();
}
//--------------------------handle button click------End-------
function calculate_points() {
  let remTime = document.getElementById("time").innerHTML;
  aTime = qTime - remTime;
  let aPoint = 0;
  if (aGet == qAnswer) {
    if (aTime <= rTime && rTime != 0) {
      aPoint = 2;
    } else {
      aPoint = 1;
    }
    errCount = 0;
  } else {
    aPoint = 0;
    errCount++;
  }
  console.log("Question # : ", q);
  console.log("Answer time: ", aTime);
  console.log("Your answer: ", aGet);
  console.log("Your point: ", aPoint);

  question.answerGet = aGet;
  question.answerPoint = aPoint;
  question.answerTime = aTime;
}
function gotoNextQ() {
  if (q == 4) {
    if (question.answerPoint == 0 && sec1[2].answerPoint == 0) {
      q = 1;
    } else {
      sec1[0].answerPoint = 1;
      sec1[1].answerPoint = 1;
      q++;
    }
  } else if (q == 2) {
    if (question.answerPoint + sec1[0].answerPoint > 0) {
      q = 5;
      errCount = 0;
    } else {
      q = sec1.length + 1; //stop the test for section 1
    }
  } else if (q > 4 && errCount == 4) {
    q = sec1.length + 1; //stop the test for section 1
  } else {
    q++;
  }

  console.log("error = " + errCount);
  //--------------------------finalize section 1-------------
  if (q > sec1.length) {
    document.getElementById("alert").setAttribute("style", "color : blue");
    document.getElementById("alert").innerHTML = "End of Section 1";
    BtnNext.setAttribute("disabled", "");
    InAnswer.setAttribute("disabled", "");
    let qqa = ""; //question data

    sec1.forEach((qq) => {
      Object.keys(qq).forEach((key) => {
        qqa = qqa + (key, qq[key]) + "  ";
      });
      totalSec1 = totalSec1 + qq.answerPoint;
      console.log(qqa);
      qqa = "";
    });

    console.log("Score for section 1 : " + totalSec1);
    BtnNext.innerHTML = "Goto to the next Section";
    BtnNext.setAttribute("onclick", 'window.location.href = "sec-02.html";');
    BtnNext.removeAttribute("disabled");
  } else {
    InAnswer.value = "";
    aGet = "";
    BtnNext.setAttribute("disabled", "");
    InAnswer.removeAttribute("disabled");
    InAnswer.focus();
    showQuestion(q);
  }
}

function timerOut() {
  //what happens when timer hits zero
  document.getElementById("alert").setAttribute("style", "color : blue");
  document.getElementById("alert").innerHTML =
    "Time is up, Please click next to go to the next question.";
  BtnNext.removeAttribute("disabled");
  InAnswer.setAttribute("disabled", "");
}
