// VARIABLE IDENTIFIERS

// Start Quiz Section
var introEl = document.querySelector("#box")
var playBtn = document.querySelector("#play-btn")
var recordsBtn = document.querySelector("#record-btn")
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
// Button in general
const ansBtn = document.querySelectorAll("button.ansBtn")
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
        correctAnswer: "1"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
]


// FUNCTIONS DEPARTMENT

// Timer
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = `Time Left:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            introEl.style.display = "none";
            quizEl.style.display = "block";
        }
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

// function to check correct answer and on to the next question
function checkAnswer(answer) {
    answer.preventDefault();

    // time out after 1 second
    setTimeout(function () {
        questionStart(questionCount)
    }, 1000);

    // answer checker
    if (questions[questionCount].correctAnswer === answer.target.value) {
        alert("That is Correct")
    } else if (questions[questionCount].correctAnswer !== answer.target.value) {
        alert("That is Wrong")
    }
    
    // increment so the questions index is increased
    if (questionCount < questions.length) {
        questionCount++;
    }

    questionStart(questionCount)
}



// Event Listeners

// Play the Test
playBtn.addEventListener("click", startTest);
// Show Records
recordsBtn.addEventListener("click", showRecords);
// Pick an answer
ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});