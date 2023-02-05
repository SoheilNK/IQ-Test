//***************************test data********************************* */
// let pData = {
//   fname: "John",
//   lname: "Doe",
//   birthday: "1985-12-24",
// };
// let sec1 = [
//   {
//     questionText: "How many cubes are there in this figure?",
//     questionTime: 15,
//     questionAnswer: 7,
//     rewardTime: 0,
//     answerTime: 0,
//     answerGet: 0,
//     answerPoint: 1,
//   },
//   {
//     questionText:
//       "Suzi has three books.  She lends one of them to her friend. How many books does she have now?",
//     questionTime: 15,
//     questionAnswer: 2,
//     rewardTime: 0,
//     answerTime: 0,
//     answerGet: 0,
//     answerPoint: 1,
//   },
//   {
//     questionText:
//       "Lee has four blankets. He buys five more. How many blankets does he have altogether?",
//     questionTime: 15,
//     questionAnswer: 9,
//     rewardTime: 0,
//     answerTime: 4,
//     answerGet: 9,
//     answerPoint: 1,
//   },
//   {
//     questionText:
//       "If a person buys a six-dollar ice cream and gives ten dollars cash to the cashier, how much should they get back in dollars?",
//     questionTime: 15,
//     questionAnswer: 4,
//     rewardTime: 0,
//     answerTime: 2,
//     answerGet: 4,
//     answerPoint: 1,
//   },
//   {
//     questionText:
//       "A newspaper salesman sold six newspapers. Each newspaper costs twenty-five cents. How much money did he make in cents?",
//     questionTime: 30,
//     questionAnswer: 150,
//     rewardTime: 0,
//     answerTime: 2,
//     answerGet: 150,
//     answerPoint: 1,
//   },
//   {
//     questionText: "One and a half metres is equal to how many centimetres?",
//     questionTime: 30,
//     questionAnswer: 150,
//     rewardTime: 0,
//     answerTime: 2,
//     answerGet: 1,
//     answerPoint: 0,
//   },
//   {
//     questionText:
//       "How many oranges could you buy with thirty-six dollars if each orange was six dollars?",
//     questionTime: 30,
//     questionAnswer: 6,
//     rewardTime: 0,
//     answerTime: 2,
//     answerGet: 1,
//     answerPoint: 0,
//   },
//   {
//     questionText:
//       "Sara runs three miles per hour. How long does it take her to run twenty-four miles?",
//     questionTime: 30,
//     questionAnswer: 8,
//     rewardTime: 0,
//     answerTime: 1,
//     answerGet: 8,
//     answerPoint: 1,
//   },
//   {
//     questionText:
//       "If Megan buys seven postage stamps which costs three dollars each and she pays fifty dollars to the cashier, how much change should she receive in dollars?",
//     questionTime: 30,
//     questionAnswer: 29,
//     rewardTime: 0,
//     answerTime: 1,
//     answerGet: 1,
//     answerPoint: 0,
//   },
//   {
//     questionText:
//       "Liam had one hundred and eighty dollars and spent seventy-five dollars. How much money does he have left? ",
//     questionTime: 30,
//     questionAnswer: 105,
//     rewardTime: 0,
//     answerTime: 1,
//     answerGet: 105,
//     answerPoint: 1,
//   },
//   {
//     questionText:
//       "The price of a pair of cans is thirty-one dollars. How much does a dozen cost?",
//     questionTime: 60,
//     questionAnswer: 186,
//     rewardTime: 10,
//     answerTime: 1,
//     answerGet: 186,
//     answerPoint: 2,
//   },
//   {
//     questionText:
//       "Hasan bought a secondhand couch. He paid two thirds of the original price. He paid four thousand dollars. How much was the original price in dollars?",
//     questionTime: 60,
//     questionAnswer: 6000,
//     rewardTime: 10,
//     answerTime: 1,
//     answerGet: 1,
//     answerPoint: 0,
//   },
//   {
//     questionText:
//       "Suzi earns four hundred dollars gross weekly. If the tax rate is fifteen percent, how much does she take home weekly?",
//     questionTime: 60,
//     questionAnswer: 340,
//     rewardTime: 15,
//     answerTime: 1,
//     answerGet: 340,
//     answerPoint: 2,
//   },
//   {
//     questionText:
//       "How many workers will be needed to complete a task in half a day when it takes six days for eight workers to complete the same task?",
//     questionTime: 120,
//     questionAnswer: 96,
//     rewardTime: 20,
//     answerTime: 1,
//     answerGet: 96,
//     answerPoint: 2,
//   },
//   13,
// ];
// let sec2 = [
//   {
//     questionImage: "pattern-01.jpg",
//     questionTime: 60,
//     questionAnswer: "1122",
//     rewardTime1: 0,
//     rewardTime2: 0,
//     answerTime: 12,
//     answerGet: "1122",
//     answerPoint: 4,
//   },
//   {
//     questionImage: "pattern-02.jpg",
//     questionTime: 60,
//     questionAnswer: "4226",
//     rewardTime1: 0,
//     rewardTime2: 0,
//     answerTime: 3,
//     answerGet: "23",
//     answerPoint: 0,
//   },
//   {
//     questionImage: "pattern-03.jpg",
//     questionTime: 60,
//     questionAnswer: "2116",
//     rewardTime1: 0,
//     rewardTime2: 0,
//     answerTime: 9,
//     answerGet: "2116",
//     answerPoint: 4,
//   },
//   {
//     questionImage: "pattern-04.jpg",
//     questionTime: 60,
//     questionAnswer: "4522",
//     rewardTime1: 0,
//     rewardTime2: 0,
//     answerTime: 1,
//     answerGet: "",
//     answerPoint: 0,
//   },
//   {
//     questionImage: "pattern-05.jpg",
//     questionTime: 60,
//     questionAnswer: "1531",
//     rewardTime1: 0,
//     rewardTime2: 0,
//     answerTime: 1,
//     answerGet: "",
//     answerPoint: 0,
//   },
//   {
//     questionImage: "pattern-06.jpg",
//     questionTime: 60,
//     questionAnswer: "5436",
//     rewardTime1: 0,
//     rewardTime2: 0,
//     answerTime: 9,
//     answerGet: "5436",
//     answerPoint: 4,
//   },
//   {
//     questionImage: "pattern-07.jpg",
//     questionTime: 120,
//     questionAnswer: "516121413",
//     rewardTime1: 30,
//     rewardTime2: 40,
//     answerTime: 1,
//     answerGet: "",
//     answerPoint: 0,
//   },
//   {
//     questionImage: "pattern-08.jpg",
//     questionTime: 120,
//     questionAnswer: "535353535",
//     rewardTime1: 45,
//     rewardTime2: 70,
//     answerTime: 22,
//     answerGet: "535353535",
//     answerPoint: 6,
//   },
//   {
//     questionImage: "pattern-09.jpg",
//     questionTime: 120,
//     questionAnswer: "546635453",
//     rewardTime1: 60,
//     rewardTime2: 80,
//     answerTime: 1,
//     answerGet: "",
//     answerPoint: 0,
//   },
//   {
//     questionImage: "pattern-10.jpg",
//     questionTime: 180,
//     questionAnswer: "425632146",
//     rewardTime1: 60,
//     rewardTime2: 80,
//     answerTime: 1,
//     answerGet: "",
//     answerPoint: 0,
//   },
//   18,
// ];



function showResult() {
  let pData = JSON.parse(localStorage.getItem("personalData"));
  let sec1 = JSON.parse(localStorage.getItem("sec1Data"));
  let sec2 = JSON.parse(localStorage.getItem("sec2Data"));

  let today = new Date();
  let dob = new Date(pData.birthday);
  document.getElementById("fname").innerHTML = pData.fname;
  document.getElementById("lname").innerHTML = pData.lname;
  document.getElementById("age").innerHTML =
    today.getFullYear() - dob.getFullYear();
  let mathRaw = sec1[sec1.length-1];
  let cubeRaw = sec2[sec2.length-1];
  var tblRows = document.getElementById("tblResult").rows;
  let cubeScaleTbl = [
    [0, 0],
    [1, 1],
    [2, 2],
    [6, 3],
    [10, 4],
    [14, 5],
    [19, 6],
    [23, 7],
    [26, 8],
    [28, 9],
    [31, 10],
    [36, 11],
    [39, 12],
    [42, 13],
    [44, 14],
    [45, 15],
    [47, 16],
    [48, 18]
  ];
  let mathScaleTbl = [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [7, 6],
    [8, 7],
    [9, 8],
    [10, 9],
    [11, 10],
    [12, 11],
    [13, 12],
    [15, 13],
    [16, 14],
    [17, 15],
    [18, 17],
  ];
  let IQScaleTbl = [
    [1, 41],
    [2, 42],
    [3, 44],
    [4, 45],
    [5, 46],
    [6, 48],
    [7, 49],
    [8, 50],
    [9, 52],
    [10, 53],
    [11, 54],
    [12, 55],
    [13, 57],
    [14, 58],
    [15, 59],
    [16, 61],
    [17, 62],
    [18, 63],
    [19, 65],
    [20, 66],
    [21, 67],
    [22, 69],
    [23, 70],
    [24, 71],
    [25, 72],
    [26, 74],
    [27, 75],
    [28, 76],
    [29, 78],
    [30, 79],
    [31, 80],
    [32, 82],
    [33, 83],
    [34, 84],
    [35, 86],
    [36, 87],
    [37, 88],
    [38, 89],
    [39, 91],
    [40, 92],
    [41, 93],
    [42, 95],
    [43, 96],
    [44, 97],
    [45, 99],
    [46, 100],
    [47, 101],
    [48, 103],
    [49, 104],
    [50, 105],
    [51, 106],
    [52, 108],
    [53, 109],
    [54, 110],
    [55, 112],
    [56, 113],
    [57, 114],
    [58, 116],
    [59, 117],
    [60, 118],
    [61, 120],
    [62, 121],
    [63, 122],
    [64, 123],
    [65, 125],
    [66, 126],
    [67, 127],
    [68, 129],
    [69, 130],
    [70, 131],
    [71, 133],
    [72, 134],
    [73, 135],
    [74, 137],
    [75, 138],
    [76, 139],
    [77, 140],
    [78, 142],
    [79, 143],
    [80, 144],
    [81, 146],
    [82, 147],
    [83, 148],
    [84, 150],
    [85, 151],
    [86, 152],
    [87, 154],
    [88, 155],
    [89, 156],
    [90, 157]
  ];  
  let IQclass = [
    [69, "Extremely Low"],
    [79, "Borderline"],
    [89, "Low Average"],
    [109, "Average"],
    [119, "High Average"],
    [129, "Superior"],
    [300, "Very Superior"]
  ];
  
    

  tblRows[2].cells[1].innerHTML = cubeRaw;
  tblRows[2].cells[2].innerHTML = mathRaw;
  // cubeScaleTbl.forEach((item) => {
  //   if (cubeRaw <= item[0]) {
  //     cubeScale = item[1];
  //    break
  //   }
  // });
  cubePoint = cubeScaleTbl.find(item => cubeRaw <= item[0])[1];
  mathPoint = mathScaleTbl.find(item => mathRaw <= item[0])[1];
  cubeScale = Math.round(cubePoint / 18 * 90);
  mathScale = Math.round(mathPoint / 17 * 90);
  tblRows[3].cells[1].innerHTML = cubeScale;
  tblRows[3].cells[2].innerHTML = mathScale;
  cubePIQ = IQScaleTbl.find((item) => cubeScale <= item[0])[1];
  mathPIQ = IQScaleTbl.find((item) => mathScale <= item[0])[1];
  tblRows[4].cells[1].innerHTML = cubePIQ;
  tblRows[4].cells[2].innerHTML = mathPIQ;
  cubeClass = IQclass.find((item) => cubePIQ <= item[0])[1];
  mathClass = IQclass.find((item) => mathPIQ <= item[0])[1];
  tblRows[5].cells[1].innerHTML = cubeClass;
  tblRows[5].cells[2].innerHTML = mathClass;
}

showResult();

// populateTable("section1Tb", sec1);
// populateTable("section2Tb", sec2);

// function populateTable(tableId, data) {
//   var table = "";
//   //   var data = [];
//   for (i = 0; i < data.length - 1; i++) {
//     table += "<tr>"; //open row
//     table += "<td>" + (i + 1) + "</td>";
//     table += "<td>" + data[i].questionAnswer + "</td>";
//     table += "<td>" + data[i].answerGet + "</td>";
//     table += "<td>" + data[i].answerTime + "</td>";
//     table += "<td>" + data[i].answerPoint + "</td>";
//     table += "</tr>"; // Close Row
//   }

//   table += "<tr>"; //open row
//   table += "<td colspan='4'>Total Points" + "</td>";
//   table += "<td>" + data[i] + "</td>";
//   table += "</tr>"; // Close Row
//   document.getElementById(tableId).innerHTML += table;
// }
