let q = 1;

//------------------------ section 2 data -------Start------------
const sec2 = [ //+*****************************************************************************************************
  {
    questionImg: "pattern-00.jpg",
    questionTime: 15,
    questionAnswer: 7,
    rewardTime1: 0,
    rewardTime2: 0,
    answerTime: 0,
    answerGet: 0,
    answerPoint: 0,
  },
];

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
            document.getElementById(source_id).setAttribute("ondragover", "allowDrop(event)");
            ev.target.setAttribute("ondragover", "");
            if (source_id.slice(0, 4) == "cube") {
                idName = data.slice(0,4);
                idNumber = +data.slice(5);
                idNumber++;
                newId = idName + "-" + idNumber;
                document.getElementById(source_id).innerHTML = imagefile ;
                document.getElementById(data).setAttribute("id", newId);
                document.getElementById(source_id).setAttribute("ondragover", "");

            }

}
        
function showQuestion(qq) {

    
}
