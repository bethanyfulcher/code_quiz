// variables referring to places in document
var questionText = document.querySelector(".question")
var answerText = document.querySelector(".answers")
var time = document.querySelector(".time")
// counting variables
var questionCount = 0;
var secondsLeft = 76;
// variables holding content of questions and answers
var questions = ["Commonly used data types DO NOT include:", "The condition in an if / else statement is enclosed within ___________.", "Arrays in JavaScript can be used to store __________.", "String values must be enclosed within _______ when being assigned to variables."]
var answers1 = [" strings", " booleans", " alerts", " numbers"]
var answers2 = [" quotes", " curly brackets", " parentheses", " square brackets"]
var answers3 = [" numbers and strings", " other arrays", " booleans", "all of the above"]
var answers4 = [" commas", " curly brackets", " quotes", " parentheses"]
var allAnswers = [answers1, answers2, answers3, answers4]
var correctAnswers = ["3. alerts", "3. parentheses", "4. all of the above", "3. quotes"]

window.onload = function () {
    // make sure that the click is on a button
    // start timer
    fillQuiz()
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            // add code to go to end page
            location.href = "final.html"
            secondsLeft === 0;
        }
    }, 1000);

}



var fillQuiz = function () {
    // update current question based on the array
    var currentQ = questions[questionCount];
    questionText.textContent = currentQ;
    // fills in all 4 answers to the question
    for (var answerCount = 0; answerCount < 4; answerCount++) {
        var currentA = allAnswers[questionCount][answerCount];
        // create button
        var button = document.createElement("button");
        // adding style to button
        button.classList.add("btn", "btn-success");
        // adding text to the button and putting it on page
        button.textContent = (answerCount + 1) + ". " + currentA;
        answerText.appendChild(button);
        // adding a break tag to the page
        var breakTag = document.createElement("br")
        answerText.appendChild(breakTag)
    }
    questionCount++
    isCorrect()
}
var isCorrect = function () {
    document.addEventListener("click", function (event) {
        event.preventDefault()
        var elementType = event.target;
        var element = event.target.innerText;

        console.log(elementType)
        console.log(element)
        console.log(correctAnswers[(questionCount) - 1])
        // makes sure that whatever the user clicks is a button
        if (elementType.matches("button")) {
            if (element === correctAnswers[(questionCount) - 1]) {
                // questionText = ""
                // answerText = ""
                questionText.innerHTML = '';
                answerText.innerHTML = '';

                if (questionCount < 5) {
                    fillQuiz()
                }
                else{
                    location.href = "final.html"
                }
            }
            else {
                secondsLeft = secondsLeft - 10;
            }
        }
    })
}