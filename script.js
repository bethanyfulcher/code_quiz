// Variables
var start = document.querySelector(".start")

// TODO: attach start button to questions page and start timer

start.addEventListener("click", function(event) {
    var element = event.target;
// make sure that the click is on a button
    if(element.matches("button")) {
        location.href = "question.html"
    }
})