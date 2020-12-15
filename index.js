// Variables
var start = document.querySelector(".start");
var time = document.querySelector(".time")

// link start button to questions page

start.addEventListener("click", function (event) {
    // event.preventDefault()
    var element = event.target;
    if (element.matches("button")) {
    location.href = "question.html";
}
})
