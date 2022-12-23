const elBtnNext = document.getElementById("btnNext");
const elAnswer = document.getElementById("answer");

let q = 3;      //Start with question #3
let qText;      //question text
let qTime;      //question allowed time
let qAnswer;    //correct answer for a question
let aTime;      //received answer time for a question
let aGet;       //received answer for a question
let aPoint;     //received point for a question
let rTime;      //remaining time for a question
let myCounter;  //Counter for timer
let t;          //Timer set time 
let question;   //current question
let totalSec1 = 0; //final points for section1
let errCount = 0;  //counts number of consecutive errors

elBtnNext.addEventListener('click', nextQ);
elAnswer.addEventListener('keyup', handleAnswerChange);
elAnswer.addEventListener('change', console.log("answer change"));

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
  q1 = {
    questionText: "question1",
    questionTime: 15,
    questionAnswer: 7,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  },
  q2 = {
    questionText: "question2",
    questionTime: 15,
    questionAnswer: 2,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  },
  q3 = {
    questionText: "question3",
    questionTime: 15,
    questionAnswer: 2,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  },
  q4 = {
    questionText: "question4",
    questionTime: 15,
    questionAnswer: 2,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  },
  q5 = {
    questionText: "question5",
    questionTime: 30,
    questionAnswer: 2,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  },
  q6 = {
    questionText: "question6",
    questionTime: 30,
    questionAnswer: 2,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  },
  q7 = {
      questionText: "question7",
      questionTime: 30,
      questionAnswer: 2,
      rewardTime: 0,
      answerTime: 0,
      answerGet: 0,
      answerPoint: 0
  },
  q8 = {
    questionText: "question8",
    questionTime: 30,
    questionAnswer: 2,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  },
  q9 = {
      questionText: "question9",
      questionTime: 30,
      questionAnswer: 2,
      rewardTime: 0,
      answerTime: 0,
      answerGet: 0,
      answerPoint: 0
  },q10 = {
    questionText: "question10",
    questionTime: 30,
    questionAnswer: 2,
    rewardTime: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  },q11 = {
    questionText: "question11",
    questionTime: 60,
    questionAnswer: 2,
    rewardTime: 10,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  },q12 = {
    questionText: "question12",
    questionTime: 60,
    questionAnswer: 2,
    rewardTime: 10,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  },q13 = {
    questionText: "question13",
    questionTime: 60,
    questionAnswer: 2,
    rewardTime: 15,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  },q14 = {
    questionText: "question14",
    questionTime: 120,
    questionAnswer: 2,
    rewardTime: 20,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0
  }
  ];
//------------------------ section 1 data -------End------------

function showQuestion(qn) {
  question = sec1[qn - 1];
  qText = question.questionText;
  qTime = question.questionTime;
  qAnswer = question.questionAnswer;
  rTime = question.rewardTime;
  document.getElementById("question").innerHTML = qText;
  timer(qTime);

  console.log("q" + q + "     = ", qText);
  console.log("Time:            ", qTime);
  console.log("Answer:          ", qAnswer);
}

function timer(t) {

  clearInterval(myCounter); //to stop counter if already counting.
  t = t + 3; //+3 seconds for reading the question
  myCounter = setInterval(() => {
  if (t <= 0) {
    console.log('completed');
    clearInterval(myCounter);
    nextQ();
  } else {
    t--;
    // console.log(t);
    // console.log('still going');
    let time = document.getElementById('time');
    time.innerHTML = t;
  }
  }, 1000);
}

//--------------------------Validate input-----------Start-------

// const answer1 = document.getElementById("answer");

// let answerV;

elAnswer.addEventListener('keyup', handleAnswerChange);
elAnswer.addEventListener('change', handleAnswerChange);

const checkAnswerValidation = (aGet) => (!isNaN(aGet) && aGet !== 0);

function handleAnswerChange(event) {
    // Get the value of the input field with id="answer"
  aGet = Number(event.target.value);
  console.log(aGet);
  console.log(typeof aGet);
  
  const hasValidAnswer = checkAnswerValidation(aGet);
  
  if (hasValidAnswer) {
  elBtnNext.removeAttribute("disabled");
  } else {
    elBtnNext.setAttribute("disabled", "");
  };
  if (event.keyCode === 13) {
    elBtnNext.click();
  }
  
}
//--------------------------Validate input-----------End-------
//--------------------------handle button click------Start-------


function nextQ() {
  clearInterval(myCounter);
  document.getElementById("alert").innerHTML = "next question";
  
  let remTime = document.getElementById('time').innerHTML;
  aTime = qTime - remTime;
  
  let aPoint = 0;
  if (aGet == qAnswer) {
    if (aTime <= rTime && rTime != 0) { aPoint = 2 } else { aPoint = 1 };
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

  if (q == 4) {
    if (question.answerPoint == 0 && sec1[q-2].answerPoint == 0) {
      q = 1;
    } else {
      sec1[0].answerPoint = 1;
      sec1[1].answerPoint = 1;
      q++;
    }
  } else if (q == 2) {
      if ((question.answerPoint + sec1[q - 2].answerPoint) > 0) {
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

  if (q > sec1.length) {
    document.getElementById("alert").innerHTML = "End of Section 1";
    elBtnNext.setAttribute("disabled", "");
    elAnswer.setAttribute("disabled", "");
    let qqa = ""; //question data

    sec1.forEach(qq => {
      Object.keys(qq).forEach(key => {
        qqa = qqa + (key, qq[key]) + "  ";
      });
      totalSec1 = totalSec1 + qq.answerPoint;
      console.log(qqa);
      qqa = "";
    });
    
    console.log("Score for section 1 : " + totalSec1);
    
  } else {
    elAnswer.value = '';
    aGet = '';
    elBtnNext.setAttribute("disabled", "");
    elAnswer.focus();
    showQuestion(q);
  }
}
//--------------------------handle button click------End-------
