let q = 1; //question number
let pattern = document.getElementById("pattern");
let qImage; //question image
let qTime; //question time
let aGet = ""; //answer recieved
let aTime = 0; //answer time
let aPoint = 0; //answer point
let attempt = 1; //attempts for questions 1 and 2
let dropArea;
let totalSec2 = 0;

const BtnNext = document.getElementById("btnNext");
let images;

BtnNext.addEventListener("click", gotoNextQ);


const sec2 = [
  {
    questionImage: "pattern-01.jpg",
    questionTime: 12,
    questionAnswer: "1122",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-02.jpg",
    questionTime: 12,
    questionAnswer: "1122",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-03.jpg",
    questionTime: 12,
    questionAnswer: "1122",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-04.jpg",
    questionTime: 12,
    questionAnswer: "1122",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-05.jpg",
    questionTime: 12,
    questionAnswer: "1122",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-06.jpg",
    questionTime: 12,
    questionAnswer: "1122",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-07.jpg",
    questionTime: 12,
    questionAnswer: "1122",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-08.jpg",
    questionTime: 12,
    questionAnswer: "1122",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-09.jpg",
    questionTime: 12,
    questionAnswer: "1122",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-10.jpg",
    questionTime: 12,
    questionAnswer: "1122",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
];
//------------------------------drag and drop----------------------
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.setData("source", ev.path[1].id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var target_id = ev.target.id;
  var source_id = ev.dataTransfer.getData("source");
  imagefile = document.getElementById(source_id).innerHTML;
  ev.target.appendChild(document.getElementById(data));
  document
    .getElementById(source_id)
    .setAttribute("ondragover", "allowDrop(event)");
  ev.target.setAttribute("ondragover", "");
  if (source_id.slice(0, 4) == "cube") {
    idName = data.slice(0, 4);
    idNumber = +data.slice(5);
    idNumber++;
    newId = idName + "-" + idNumber;
    document.getElementById(source_id).innerHTML = imagefile;
    document.getElementById(data).setAttribute("id", newId);
    document.getElementById(source_id).setAttribute("ondragover", "");
  }
}
//--------------------------------------------------------------------------
function runSec2() {
  qTime = sec2[q - 1].questionTime;
  
  showQuestion(q);
  timer(qTime);
}

function showQuestion(qq) {
  aGet = "";
  qTime = sec2[q - 1].questionTime;
  qImage = sec2[qq - 1].questionImage;
  let pickupArea =
    `
            <div id="trash" style="border: 0px;" ondrop="drop(event)" ondragover="allowDrop(event)">
                <img src="static/bin-icon.png" id="trash" width="100px" height="100px">
            </div>
            <div id="cube1" ondrop="drop(event)" >
                <img src="static/cube-red.jpg" draggable="true" ondragstart="drag(event)" id="img1-1" width="100px" height="100px">
            </div>
            <div id="cube2" ondrop="drop(event)">
                <img src="static/cube-black.jpg" draggable="true" ondragstart="drag(event)" id="img2-1" width="100px" height="100px">
            </div>
            <div id="cube3" ondrop="drop(event)">
                <img src="static/cube-half1.jpg" draggable="true" ondragstart="drag(event)" id="img3-1" width="100px" height="100px">
            </div>
            <div id="cube4" ondrop="drop(event)">
                <img src="static/cube-half2.jpg" draggable="true" ondragstart="drag(event)" id="img4-1" width="100" height="100">
            </div>
            <div id="cube5" ondrop="drop(event)">
                <img src="static/cube-half3.jpg" draggable="true" ondragstart="drag(event)" id="img5-1" width="100" height="100">
            </div>
            <div id="cube6" ondrop="drop(event)">
                <img src="static/cube-half4.jpg" draggable="true" ondragstart="drag(event)" id="img6-1" width="100" height="100">
            </div>
  `;
  if (q <= 6) {
    dropArea = 
      `
          <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"><p>1</p></div>
          <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"><p>2</p></div>
          <div id="div3" ondrop="drop(event)" ondragover="allowDrop(event)"><p>3</p></div>
          <div id="div4" ondrop="drop(event)" ondragover="allowDrop(event)"><p>4</p></div>
        `;
  } else {
    document.getElementById("drop-area").setAttribute("style", "height: 300px; width: 300px;");
    dropArea = `
          <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
          <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
          <div id="div3" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
          <div id="div4" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
          <div id="div5" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
          <div id="div6" ondrop="drop(event)" ondragover="allowDrop(event)"></div>    
          <div id="div7" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
          <div id="div8" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
          <div id="div9" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        `;
    
  }

  document.getElementById("pickup-area").innerHTML = pickupArea;
  document.getElementById("drop-area").innerHTML = dropArea;
  pattern.setAttribute("src", "static/" + qImage);
  document.getElementById("alert").setAttribute("style", "color : blue");
  document.getElementById("alert").innerHTML =
    "Complete the left side to go to the next question.";

}


function timerOut() {
  //what happens when timer hits zero
  document.getElementById("alert").setAttribute("style", "color : blue");
  document.getElementById("alert").innerHTML =
    "Time is up, Please click next to go to the next question.";
  BtnNext.removeAttribute("disabled");
  freezeImages(); //  prevent images from further movements

}

function gotoNextQ(){
  calulateAnswer();
  calculatePoints();
  showQuestion(q);
  timer(qTime);
}

function freezeImages() {
  images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("draggable", "false");
  }
}

function calulateAnswer() {
  images = document.getElementById("drop-area").getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    var imageCode = images[i].id.slice(3, 4);
    console.log(imageCode);
    aGet = aGet + imageCode;
    console.log(aGet);
  }
  let remTime = document.getElementById("time").innerHTML;
  aTime = qTime - remTime;
  sec2[q - 1].answerGet = aGet;
  sec2[q - 1].answerTime = aTime;
}

function calculatePoints() {
  qAnswer = sec2[q - 1].questionAnswer;
  if (q == 1 || q == 2) {
    aPoint = 0;
    if (aGet == qAnswer) {
      if (attempt == 1) {
        aPoint = 4;
      } else {
        aPoint = 2;
      }
      sec2[q - 1].answerPoint = aPoint;
      q++;
      attempt = 1;
    } else {
      if (attempt == 1) {
        attempt++;
        window.alert("Please try again");
      } else {
        sec2[q - 1].answerPoint = aPoint;
        q++;
        attempt = 1;
      }
    };
  };

  if (q > 2 && q <7) {
    q++;
  };

  if (q > 6 && q < 11) {
    q++;
  };
  if (q > 10) {
    document.getElementById("alert").setAttribute("style", "color : blue");
    document.getElementById("alert").innerHTML = "End of Section 2";
    BtnNext.setAttribute("disabled", "");
    let qqa = ""; //question data

    sec2.forEach((qq) => {
      Object.keys(qq).forEach((key) => {
        qqa = qqa + (key, qq[key]) + "  ";
      });
      totalSec2 = totalSec2 + qq.answerPoint;
      console.log(qqa);
      qqa = "";
    });

    console.log("Score for section 2 : " + totalSec2);
    BtnNext.innerHTML = "Goto to the Result";
    BtnNext.setAttribute("onclick", 'window.location.href = "result.html";');
    BtnNext.removeAttribute("disabled");
  };
  window.alert("your point: " + aPoint);

  console.log(aGet, qAnswer, attempt, aPoint);
  console.log("next question", q);
}
