let q = 1;
let pattern = document.getElementById("pattern");
let qImage; //question image
let qTime; //question time
let aGet = ""; //answer recieved
let aTime = 0; //answer time
let aPoint = 0; //answer point
let attempt = 1; //attempts for questions 1 and 2
let dropArea;
let totalSec2 = 0;
let errCount = 0; //counts number of consecutive errors
let moving = null;
let sourcePickup = "";
let boxes = null;

const BtnNext = document.getElementById("btnNext");
let images;

BtnNext.addEventListener("click", gotoNextQ);
// BtnNext.addEventListener("touchstart", gotoNextQ);

const sec2 = [
  {
    questionImage: "pattern-01.jpg",
    questionTime: 30,
    questionAnswer: "1122",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-02.jpg",
    questionTime: 30,
    questionAnswer: "4226",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-03.jpg",
    questionTime: 30,
    questionAnswer: "2116",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-04.jpg",
    questionTime: 30,
    questionAnswer: "4522",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-05.jpg",
    questionTime: 30,
    questionAnswer: "1531",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-06.jpg",
    questionTime: 30,
    questionAnswer: "5436",
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-07.jpg",
    questionTime: 60,
    questionAnswer: "516121413",
    rewardTime1: 15,
    rewardTime2: 20,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-08.jpg",
    questionTime: 60,
    questionAnswer: "535353535",
    rewardTime1: 23,
    rewardTime2: 35,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-09.jpg",
    questionTime: 60,
    questionAnswer: "546635453",
    rewardTime1: 30,
    rewardTime2: 40,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
  {
    questionImage: "pattern-10.jpg",
    questionTime: 90,
    questionAnswer: "425632146",
    rewardTime1: 30,
    rewardTime2: 40,
    answerTime: 0,
    answerGet: "",
    answerPoint: 0,
  },
];
//------------------------------drag and drop----old------------------

// function dragStart(e) {
//   e.dataTransfer.setData("data", e.target.id);
//     e.dataTransfer.setData("source", e.target.parentElement.id);

// }

// function dragEnter(e) {
//   var target_id = e.target.id;
//   var content = target_id.slice(0, 3);
//   if (content == 'img') {
//     // e.Default();
//   } else { e.preventDefault() };
//     e.target.classList.add('drag-over');
// }

// function dragOver(e) {
//   var target_id = e.target.id;
//   var content = target_id.slice(0, 3);
//   if (content == "img") {
//     // e.Default();
//   } else {
//     e.preventDefault();
//   }
//   e.target.classList.add("drag-over");
// }

// function dragLeave(e) {
//     e.target.classList.remove('drag-over');
// }

// function drop(e) {
//   e.target.classList.remove("drag-over");
//   var data = e.dataTransfer.getData("data");
//   // get the draggable element
//   const source_id = e.dataTransfer.getData("source");
//   var target_id = e.target.id;
//   const draggable = document.getElementById(data);

//   // imagefile = draggable.innerHTML;
//   e.target.appendChild(draggable);
//   draggable.classList.remove("hide");
//   parentElement = document.getElementById(source_id);
//   if (source_id.slice(0, 4) == "cube") {
//       idName = data.slice(0, 4);
//       idNumber = +data.slice(5);
//       idNumber++;
//     newId = idName + "-" + idNumber;
//     newImage = draggable.cloneNode(true);
//     newImage.setAttribute('id', newId);
//     parentElement.appendChild(newImage);

//     document.getElementById(newId).addEventListener("dragstart", dragStart);
//     }

// }
//--------------------------------------------------------------------------
//------new drag and drop with touch support--------------------------------

function pickup(event) {
  event.preventDefault();
  sourcePickup = event.currentTarget.parentElement.id;
  moving = event.target;
  moving.style.height = moving.clientHeight + "px";
  moving.style.width = moving.clientWidth + "px";
  console.log("Pick Up : ", moving.style.height, moving.style.width);
  moving.style.position = "fixed";
  moving.style.zIndex = "-10";
}
// $(document).bind("touchstart", function (e) {
//   e.preventDefault();
//   var orig = e.riginalEvent;

//         })

function move(event) {
  // event.preventDefault();
  if (moving) {
    if (event.pageX) {
      // mousemove
      // for test
      targetHit = document.elementFromPoint(event.pageX, event.pageY);
      // for test

      moving.style.left = event.pageX - moving.clientWidth / 2 + "px";
      moving.style.top = event.pageY - moving.clientHeight / 2 + "px";
    } else {
      // touchmove - assuming a single touchpoint
      targetHit = document.elementFromPoint(
        event.changedTouches[0].pageX,
        event.changedTouches[0].pageY
      );

      moving.style.left =
        event.changedTouches[0].pageX - moving.clientWidth / 2 + "px";
      moving.style.top =
        event.changedTouches[0].pageY - moving.clientHeight / 2 + "px";
    }

  console.log("Move : ", moving.style.left, moving.style.top);
  

      boxes.forEach((box) => {
        if (targetHit.id == box.id) {
          box.classList.add("drag-over");
        } else {
          box.classList.remove("drag-over");
        }
      });

    // if (targetHit.id == "div1") {
    //   document.getElementById("div1").classList.add("drag-over");
    // } else {
    //   document.getElementById("div1").classList.remove("drag-over");
    // }
    // if (targetHit.id == "div2") {
    //   document.getElementById("div2").classList.add("drag-over");
    // } else {
    //   document.getElementById("div2").classList.remove("drag-over");
    // }
    // if (targetHit.id == "div3") {
    //   document.getElementById("div3").classList.add("drag-over");
    // } else {
    //   document.getElementById("div3").classList.remove("drag-over");
    // }
    // if (targetHit.id == "div4") {
    //   document.getElementById("div4").classList.add("drag-over");
    // } else {
    //   document.getElementById("div4").classList.remove("drag-over");
    // }
  }
}

function drop(event) {
  // event.preventDefault();
  if (moving) {
    if (event.currentTarget.tagName !== "HTML") {
      let target = null;
      if (event.pageX) {
        target = document.elementFromPoint(event.pageX, event.pageY);
        // target = event.currentTarget;
      } else {
        target = document.elementFromPoint(
          event.changedTouches[0].pageX,
          event.changedTouches[0].pageY
        );
        // if (target.tagName == "IMG") {
        //   target = target.parentElement;
        // }
      }
      if (
        (target.innerHTML == "" && target.tagName !== "IMG") ||
        target.id == "trash1"
      ) {
        target.appendChild(moving);
        parentElement = document.getElementById(sourcePickup);
        if (sourcePickup.slice(0, 4) == "cube") {
          idName = moving.id.slice(0, 4);
          idNumber = +moving.id.slice(5);
          idNumber++;
          newId = idName + "-" + idNumber;
          newImage = moving.cloneNode(true);
          newImage.setAttribute("id", newId);
          parentElement.appendChild(newImage);

          document
            .getElementById(newId)
            .setAttribute("onmousedown", "pickup(event)");
          document
            .getElementById(newId)
            .setAttribute("ontouchstart", "pickup(event)");

          // reset our element
          newImage.style.left = "";
          newImage.style.top = "";
          newImage.style.height = "";
          newImage.style.width = "";
          newImage.style.position = "";
          newImage.style.zIndex = "";

          newImage = null;
        }
      }

      // reset our element
      moving.style.left = "";
      moving.style.top = "";
      moving.style.height = "";
      moving.style.width = "";
      moving.style.position = "";
      moving.style.zIndex = "";

      moving = null;
    }
  }
}

//-----------------------------------------------------------------

function runSec2() {
  qTime = sec2[q - 1].questionTime;

  showQuestion(q);
  timer(qTime);
}

function showQuestion(qq) {
  aGet = "";
  qTime = sec2[q - 1].questionTime;
  qImage = sec2[qq - 1].questionImage;
  let pickupArea = `
            <div id="trash" class="box" >
                <img src="static/recycle-bin-icon-16272.png" id="trash1" onmouseup="drop(event)" ontouchend="drop(event)">
            </div>
            <div id="cube1">
                <img src="static/cube-red.jpg" onmousedown="pickup(event)" ontouchstart="pickup(event)" class="item" id="img1-1">
            </div>
            <div id="cube2">
                <img src="static/cube-black.jpg" onmousedown="pickup(event)" ontouchstart="pickup(event)" class="item" id="img2-1">
            </div>
            <div id="cube3">
                <img src="static/cube-half1.jpg" onmousedown="pickup(event)" ontouchstart="pickup(event)" class="item" id="img3-1">
            </div>
            <div id="cube4">
                <img src="static/cube-half2.jpg" onmousedown="pickup(event)" ontouchstart="pickup(event)" class="item" id="img4-1">
            </div>
            <div id="cube5">
                <img src="static/cube-half3.jpg" onmousedown="pickup(event)" ontouchstart="pickup(event)"class="item" id="img5-1">
            </div>
            <div id="cube6">
                <img src="static/cube-half4.jpg" onmousedown="pickup(event)" ontouchstart="pickup(event)" class="item" id="img6-1">
            </div> 
  `;
  if (q <= 6) {
    dropArea = `
    <div id="div2" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
    <div id="div3" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
    <div id="div4" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
    <div id="div1" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
        `;
  } else {
    document
      .getElementById("drop-area")
      .setAttribute(
        "style",
        "height: calc(var(--imgWidth) * 240 / 80 ); width: calc(var(--imgWidth) * 240 / 80 );"
      );
    dropArea = `
          <div id="div1" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
          <div id="div2" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
          <div id="div3" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
          <div id="div4" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
          <div id="div5" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
          <div id="div6" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
          <div id="div7" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
          <div id="div8" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
          <div id="div9" class="box" onmouseup="drop(event)" ontouchend="drop(event)"></div>
        `;
  }

  document.getElementById("pickup-area").innerHTML = pickupArea;
  document.getElementById("drop-area").innerHTML = dropArea;
  pattern.setAttribute("src", "static/" + qImage);
  document.getElementById("alert").setAttribute("style", "color : blue");

  boxes = document.querySelectorAll(".box");



  /* draggable element */
  // const items = document.querySelectorAll(".item");

  // items.forEach((item) => {
  //   item.addEventListener("dragstart", dragStart);
  // });

  /* drop targets */
  // const boxes = document.querySelectorAll(".box");

  // boxes.forEach((box) => {
  //   box.addEventListener("dragenter", dragEnter);
  //   box.addEventListener("dragover", dragOver);
  //   box.addEventListener("dragleave", dragLeave);
  //   box.addEventListener("drop", drop);
  // });
}

function timerOut() {
  //what happens when timer hits zero
  document.getElementById("alert").setAttribute("style", "color : blue");
  document.getElementById("alert").innerHTML =
    "Time is up, Please click next to go to the next question.";
  BtnNext.removeAttribute("disabled");
  freezeImages(); //  prevent images from further movements
}

function gotoNextQ() {
  document.getElementById("btnNext").style.backgroundColor =
    "var(--deeppurple-3)";
  calulateAnswer();
  calculatePoints();
  if (q < 11 && errCount != 3) {
    showQuestion(q);
    timer(qTime);
  }
}

function freezeImages() {
  images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].removeAttribute("onmousedown");
    images[i].removeAttribute("ontouchstart");
  }
}

function calulateAnswer() {
  images = document.getElementById("drop-area").getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    var imageCode = images[i].id.slice(3, 4);
    // console.log(imageCode);
    aGet = aGet + imageCode;
    // console.log(aGet);
  }
  let remTime = document.getElementById("time").innerHTML;
  aTime = qTime - remTime;
  sec2[q - 1].answerGet = aGet;
  sec2[q - 1].answerTime = aTime;
}

function calculatePoints() {
  repeat = false;
  qAnswer = sec2[q - 1].questionAnswer;
  rTime1 = sec2[q - 1].rewardTime1;
  rTime2 = sec2[q - 1].rewardTime2;

  if (q == 1 || q == 2) {
    aPoint = 0;
    if (aGet == qAnswer) {
      if (attempt == 1) {
        aPoint = 4;
      } else {
        aPoint = 2;
      }
      attempt = 1;
      errCount = 0;
    } else {
      if (attempt == 1) {
        attempt++;
        window.alert("Please try again");
        repeat = true;
      } else {
        attempt = 1;
        errCount++;
      }
    }
  }

  if (q > 2 && q < 7) {
    if (aGet == qAnswer) {
      aPoint = 4;
      errCount = 0;
    } else {
      aPoint = 0;
      errCount++;
    }
  }

  if (q > 6 && q < 11) {
    if (aGet == qAnswer) {
      if (aTime <= rTime1) {
        aPoint = 6;
      } else if (aTime <= rTime2) {
        aPoint = 5;
      } else {
        aPoint = 4;
      }
      errCount = 0;
    } else {
      //wrong answer
      aPoint = 0;
      errCount++;
    }
  }

  sec2[q - 1].answerPoint = aPoint;
  if (!repeat) {
    //****************** */
    q++;
  }

  // window.alert("your point: " + aPoint);

  // console.log(aGet, qAnswer, attempt, aPoint);
  // console.log("next question", q);
  if (q == 11 || errCount == 3) {
    endSection2();
  }
}

function showResult() {
  window.location.href = "result.html";
}

function endSection2() {
  document.getElementById("alert").setAttribute("style", "color : blue");
  document.getElementById("alert").innerHTML = "End of Section 1";
  BtnNext.setAttribute("disabled", "");
  clearInterval(myCounter);

  sec2.forEach((qq) => {
    // Object.keys(qq).forEach((key) => {
    //   qqa = qqa + (key, qq[key]) + "  ";
    // });
    totalSec2 = totalSec2 + qq.answerPoint;
    // console.log(qqa);
    // qqa = "";
  });
  sec2.push(totalSec2);
  localStorage.setItem("sec2Data", JSON.stringify(sec2));
  freezeImages();
  // console.log("Score for section 2 : " + totalSec2);
  BtnNext.innerHTML = "Go to the Next Section";
  BtnNext.removeEventListener("click", gotoNextQ);
  // BtnNext.removeEventListener("touchstart", gotoNextQ);
  BtnNext.setAttribute("onclick", 'window.location.href = "sec-01.html";');
  // BtnNext.setAttribute("ontouchstart", 'window.location.href = "result.html";');
  BtnNext.removeAttribute("disabled");
}
