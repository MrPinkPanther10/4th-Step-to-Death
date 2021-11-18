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
// Final Score Section
var resultEl = document.querySelector("#final")
var finalScoreEl = document.querySelector(".score-result")

// Score Array
var scoreEl = 0;

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
        // 2nd Question
        question: "What is Captain America's shield made of?",
        answers: ["Adamantium", "Uru", "Titanium", "Vibranium"],
        correctAnswer: "3"
    },
    {
        // 3rd Question
        question: "Who was the first Robin in DC Comics?",
        answers: ["Jason Todd", "Damian Wayne   ", "Dick Grayson", "Tim Drake"],
        correctAnswer: "2"
    },
    {
        // 4th Question
        question: "S.H.I.E.L.D stands for _______",
        answers: ["Strategic Homeland Intervention, Enforcement and Logistics Division.", "Surgical Homeland Invasion, Energy and Livestock Division", "Strategic Hostile Intervention, Endorsement and Laser Division", "Strategic Homeland Invasion, Enforcement and Logistics Division"],
        correctAnswer: "0"
    },
    {
        // 5th Question
        question: "Which Order brought down the Jedi?",
        answers: ["Order 69", "Order 51", "Order 99", "Order 66"],
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
            addScores()
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

// function to reset the button colors
function resetButton() {
    setTimeout(function () {
        ans1Btn.style.backgroundColor = ""
        ans2Btn.style.backgroundColor = ""
        ans3Btn.style.backgroundColor = ""
        ans4Btn.style.backgroundColor = ""
    }, 200);
}


// function to show questions and choices
function questionStart(id) {
    setTimeout(function () {
        if (id < questions.length) {
            questionEl.textContent = questions[id].question;
            ans1Btn.textContent = questions[id].answers[0];
            ans2Btn.textContent = questions[id].answers[1];
            ans3Btn.textContent = questions[id].answers[2];
            ans4Btn.textContent = questions[id].answers[3];
        }
    }, 250);
}

// function to check correct answer and on to the next question
function checkAnswer(answer) {
    answer.preventDefault();

    // answer checker
    if (questions[questionCount].correctAnswer === answer.target.value) {
        answer.target.style.backgroundColor = "green"
        scoreEl++
    } else if (questions[questionCount].correctAnswer !== answer.target.value) {
        answer.target.style.backgroundColor = "red"
    }

    // increment so the questions index is increased
    if (questionCount < questions.length) {
        questionCount++;
    }

    questionStart(questionCount)
    resetButton()
}

// function to add all scores and show final score section
function addScores() {
    quizEl.style.display = "none";
    resultEl.style.display = "block";
    finalScoreEl.textContent = ("You have the score of " + scoreEl + " out of " + questions.length)
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

// if (secondsLeft === 0 || questionCount === questions.length) {
//     clearInterval(timerInterval);
//     quizEl.style.display = "none";
//     resultEl.style.display = "block";
// }
// }, 1000);

// if (secondsLeft === 0 || questionCount === questions.length) {
//     questionCount++
//     questionStart(questionCount)
//     clearInterval(timerInterval);
// }
// }, 1000);