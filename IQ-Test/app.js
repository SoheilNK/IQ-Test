function start() {
    let fname1 = document.getElementById("fname").value;
    let lname1 = document.getElementById("lname").value;
    let age1 = document.getElementById("age").value;
    localStorage.setItem("fname", JSON.stringify(fname1));
    localStorage.setItem("lname", JSON.stringify(lname1));
    localStorage.setItem("age", JSON.stringify(age1));
    window.location.replace("sec-01-q03.html")
}


function checkinput() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("q01").value;
    points = JSON.parse(localStorage.getItem("score"));
    // If x is Not a positive Number
    let text;
    if (isNaN(x) || x < 0) {
        text = "Enter a positive number";
        points = points - 1;
        localStorage.setItem("score", JSON.stringify(points));
        document.getElementById("button1").disabled = true;
    } else {
        text = "Input OK";
        points = points + 1;
        localStorage.setItem("score", JSON.stringify(points));
        document.getElementById("button1").disabled = false;
    }
  document.getElementById("alert").innerHTML = text + "  " + points;
}