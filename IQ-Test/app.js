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

function section1() {
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
      questionTime: 30,
      questionAnswer: 2,
      rewardTime: 0,
      answerTime: 0,
      answerGet: 0,
      answerPoint: 0
    },
    q3 = {
      questionText: "question3",
      questionTime: 30,
      questionAnswer: 2,
      rewardTime: 0,
      answerTime: 0,
      answerGet: 0,
      answerPoint: 0
    },
    q4 = {
      questionText: "question4",
      questionTime: 30,
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
  ];

  for (let q = 1; q <= 14; q++) {
    let question = sec1[q - 1];
    qText = question.questionText;
    qTime = question.questionTime;
    qAnswer = question.questionAnswer;
    console.log("q" + q + " = ", qText);
    console.log("Time:        ", qTime);
    console.log("Answer:      ", qAnswer);
  } 
};


// 

// //button
// const button = document.getElementById('btn');
// button.addEventListener('click', timer);
let myCounter;
let t;
let qTime;
function timer(t) {
  qTime = t; //Question time
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

const answer1 = document.getElementById("answer");

let answerV;

answer1.addEventListener('keyup', handleAnswerChange);
answer1.addEventListener('change', handleAnswerChange);

const checkAnswerValidation = (answerV) => (!isNaN(answerV) && answerV !== 0);

function handleAnswerChange(event) {
    // Get the value of the input field with id="answer"
  answerV = Number(event.target.value);
  console.log(answerV);
  console.log(typeof answerV);
  
    const hasValidAnswer = checkAnswerValidation(answerV);
    
    if (hasValidAnswer) {
    elBtnNext.removeAttribute("disabled");
    // elTooltip.classList.remove("isActive");
  } else {
    elBtnNext.setAttribute("disabled", "");
    // elTooltip.classList.add("isActive");
  }
}

//--------------------------handle button click-----------------------------
const elBtnNext = document.getElementById("btnNext");

elBtnNext.addEventListener('click', nextQ);

function nextQ() {
  clearInterval(myCounter);
  document.getElementById("alert").innerHTML = "next question";
  remTime = document.getElementById('time').innerHTML;
  aTime = qTime - remTime;
  
  let aPoint = 0;
  if (answerV == 9) {
    aPoint = 1;
  } else {
      aPoint = 0;
  }
  
  console.log("Answer time: ", aTime)
  console.log("Your answer: ", answerV);
  console.log("Your point: ", aPoint);
} 