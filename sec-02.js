let q = 1;  //question number
let pattern = document.getElementById("pattern");
let qImage; //question image
let qTime; //question time
let aGet = ""; //answer recieved
let aTime = 0; //answer time
let aPoint = 0; //answer point
let attempt = 1; //attempts for questions 1 and 2

let BtnNext = document.getElementById("btnNext");
let images;

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


BtnNext.addEventListener("click", runSec2);

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

//------------------------ section 2 data -------Start------------

function runSec2() {
  //   q = Number(localStorage.getItem("q"));
  //   attempt = Number(localStorage.getItem("attempt"));
  qTime = sec2[q - 1].questionTime;
        showQuestion(q);
        timer(qTime);
}

function showQuestion(qq) {
    qImage = sec2[qq - 1].questionImage;
            let originalPage =
              `
        <div>      
        </div>
        <div style="font-size: larger;"><p>Using the squares below, create a picture like the right-side pattern. </p></div>
        
        <div class="pickup-area" id="pickup-area">
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

        </div>
        <div class="workshop">
            
            
            <div class="drop-side"> 
                <div class="drop-area" id="drop-area">
                    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"><p>1</p></div>
                    <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"><p>2</p></div>
                    <div id="div3" ondrop="drop(event)" ondragover="allowDrop(event)"><p>3</p></div>
                    <div id="div4" ondrop="drop(event)" ondragover="allowDrop(event)"><p>4</p></div>
                    <!-- <div id="div5" ondrop="drop(event)" ondragover="allowDrop(event)"><p>5</p</div>
                    <div id="div6" ondrop="drop(event)" ondragover="allowDrop(event)"><p>6</p</div>    
                    <div id="div7" ondrop="drop(event)" ondragover="allowDrop(event)"><p>7</p</div>
                    <div id="div8" ondrop="drop(event)" ondragover="allowDrop(event)"><p>8</p</div>
                    <div id="div9" ondrop="drop(event)" ondragover="allowDrop(event)"><p>9</p</div> -->
                </div>
            </div>
            <div id="lineV"><img src="static/cube-black.jpg" width="1" height="340"></div>
            <div class="pattern-side">
                <div >
                    <img id="pattern" src="static/` +
              qImage +
              `" alt="Pattern">
                </div>
            </div>
        </div>

        <div><p id="alert" style="color: red; text-align: center;">Complete the left side to go to the next question.</p></div>
        <div>
            
            <button  type="button" class="button1" id="btnNext" >Next</button>
        </div>
`;
            document.getElementById("container").innerHTML = originalPage;
}

function timerOut() {
  //what happens when timer hits zero
  document.getElementById("alert").innerHTML =
    "Time is up, Please click next to go to the next question.";
  BtnNext.removeAttribute("disabled");
  imagesFrezz(); //  prevent images from further movements
  calulateAnswer();
  calculatePoints();
}

function imagesFrezz() {
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
    }
  }
  window.alert("your point: " + aPoint);

  console.log(aGet, qAnswer, attempt, aPoint);
  console.log("next question", q);
}
