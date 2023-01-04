let q = 1;
let pattern = document.getElementById("pattern");
let qImage; //question image
let qTime; //question time
let aGet = "";  //answer recieved
let aTime = 0;  //answer time
let aPoint = 0; //answer point

let BtnNext = document.getElementById("btnNext");
let images;

//------------------------ section 2 data -------Start------------
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
];

function runSec2() {
  qTime = sec2[q - 1].questionTime;
  showQuestion(q);
  timer(qTime);
}

function showQuestion(qq) {
  qImage = sec2[qq - 1].questionImage;
  pattern.setAttribute("src", qImage);
}

function timerOut() {
    //what happens when timer hits zero
    document.getElementById("alert").innerHTML =
    "Time is up, Please click next to go to the next question.";
    BtnNext.removeAttribute("disabled");
    imagesFrezz(); //  prevent images from further movements
    calulateAnswer();
    calculatePoints(); //*********************************************************** */
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
    //****************************************************** */
}








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
