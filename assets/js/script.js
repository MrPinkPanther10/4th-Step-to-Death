// VARIABLE IDENTIFIERS

// Start Quiz Section
var introEl = document.querySelector("#box")
var playBtn = document.querySelector("#play-btn")
var recordsBtn= document.querySelector("#record-btn")
// REcords Section
var recordsEl = document.querySelector(".records")
// Quiz Time Section
var quizEl = document.querySelector(".quiz-time")
var timerEl = document.querySelector(".quiz-timer")
var secondsLeft = 16
// Question Section
var questionEl = document.querySelector("#question")
var questionCount = 0;

// Answer Buttons
// Answer 1
const ans1Btn = document.querySelector("#answer1")
// Answer 2
const ans2Btn = document.querySelector("#answer2")
// Answer 3
const ans3Btn = document.querySelector("#answer3")
// Answer 4
const ans4Btn = document.querySelector("#answer4")


// ARRAYS DEPARTMENT

// Questions & Answers
const questions = [
    {
        // 1st Question
        question: "What is the name of Han Solo's Spaceship?",
        answers: ["USS Enterprise - B", "Millenium Falcon", "Death Star", "Discovery"],
        correctAnswer: "Millenium Falcon"
    }
]


// FUNCTIONS DEPARTMENT

// Timer
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = `Time Left:${secondsLeft}s`;

        // if (secondsLeft === 0 || questionCount === questions.length) {
        //     clearInterval(timerInterval);
        //     questionsEl.style.display = "none";
        //     finalEl.style.display = "block";
        //     scoreEl.textContent = secondsLeft;
        // }
    }, 1000);
}

// To start the test and timer and show up question
function startTest() {
    introEl.style.display = "none";
    quizEl.style.display = "block";
    questionCount = 0;

    setTime();
    questionStart(questionCount)
}

// To show high score records
function showRecords() {
    introEl.style.display = "none"
    recordsEl.style.display = "block"
}


// function to show questions and choices
function questionStart(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}


// Event Listeners
playBtn.addEventListener("click", startTest);
recordsBtn.addEventListener("click", showRecords);