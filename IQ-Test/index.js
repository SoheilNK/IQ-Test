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