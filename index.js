// Variables referencing parts of HTML
var start = document.querySelector(".start");
var time = document.querySelector(".time")
var intro = document.querySelector("#introPage")
var question = document.querySelector("#questionPage")
var final = document.querySelector("#finalPage")
var highscores = document.querySelector("#highscoresPage")
var questionText = document.querySelector(".question")
var answerText = document.querySelector(".answers")
var finalScore = document.querySelector(".finalScore")
var inputForm = document.querySelector(".initials")

// counting variables
var questionCount = 0;
var secondsLeft = 100;

var initials

// variables holding content of questions and answers
var questions = ["Commonly used data types DO NOT include:", "The condition in an if / else statement is enclosed within ___________.", "Arrays in JavaScript can be used to store __________.", "String values must be enclosed within _______ when being assigned to variables."]
var answers1 = [" strings", " booleans", " alerts", " numbers"]
var answers2 = [" quotes", " curly brackets", " parentheses", " square brackets"]
var answers3 = [" numbers and strings", " other arrays", " booleans", "all of the above"]
var answers4 = [" commas", " curly brackets", " quotes", " parentheses"]
var allAnswers = [answers1, answers2, answers3, answers4]
var correctAnswers = ["3. alerts", "3. parentheses", "4. all of the above", "3. quotes"]


// looks for a click of the start button
start.addEventListener("click", function (event) {
    // event.preventDefault()
    var element = event.target;
    if (element.matches("button")) {
        intro.setAttribute("style", "display: none")
        question.setAttribute("style", "display: block")
        startQuiz()
    }
})

var timerInterval
var startQuiz = function () {
    // make sure that the click is on a button
    // start timer
    timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            endQuiz()
        }
    }, 1000);

    fillQuiz()
}

var answerText
// function to load next question and set of answers
var fillQuiz = function () {
    // only fills out quiz if next question exists
    if (questionCount < 4) {

        // update current question based on the array
        var currentQ = questions[questionCount];
        questionText.textContent = currentQ;
        // fills in all 4 answers to the question
        for (answerCount = 0; answerCount < 4; answerCount++) {
            var currentA = allAnswers[questionCount][answerCount];
            // create button
            var button = document.createElement("button");
            // adding style to button
            button.classList.add("btn", "btn-success", "answerButton");
            // adding text to the button and putting it on page
            button.textContent = (answerCount + 1) + ". " + currentA;
            answerText.appendChild(button);
            // adding a break tag to the page
            var breakTag = document.createElement("br")
            answerText.appendChild(breakTag)
        }
    }
    // else change to final screen
    else {
        endQuiz()
    }
}

    // looks for a click
    document.addEventListener("click", function (event) {
        event.preventDefault()
        
        // defines what the user clicked on
        var elementType = event.target;
        var element = event.target.innerText;
        
        // makes sure that whatever the user clicks is a button
        if (elementType.matches(".answerButton")) {
            // if user answer equals the correct answer
            if (element === correctAnswers[questionCount ]) {
                console.log("correct!!")
                
                // clear previous questions text
                questionText.innerHTML = '';
                answerText.innerHTML = '';
                // fill quiz for next question
                questionCount++
                fillQuiz()
            }
            // 
            else {
                // prevents timer from going negative
                if (secondsLeft >= 10) {
                    console.log("wrong answer!!!")
                    secondsLeft = secondsLeft - 10;
                }
                else {
                    secondsLeft = 0
                }
            }
        }

        // looks for a click of the submit button on the end page
        if (elementType.matches(".submit")) {
            console.log("submited!")
            addHighscore()
            
        }
    })
    
    var endQuiz = function() {
        clearInterval(timerInterval);
        // add code to go to end page
        question.setAttribute("style", "display: none")
        final.setAttribute("style", "display: block")
        
        finalScore.textContent = secondsLeft
    }
    
    var addHighscore = function() {
        // save the users input into a variable 
        // add finalScore to local variable
        // make sure initials are attached to the score
        initials = inputForm.value
        console.log(initials)
        
        // changes page displayed
        final.setAttribute("style", "display: none")
        highscores.setAttribute("style", "display: block")
}