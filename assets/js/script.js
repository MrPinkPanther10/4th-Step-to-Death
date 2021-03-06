// VARIABLE IDENTIFIERS

// Start Quiz Section
var introEl = document.querySelector("#box")
var playBtn = document.querySelector("#play-btn")
var recordsBtn = document.querySelector("#record-btn")
// REcords Section
var recordsEl = document.querySelector(".records")
var holdersEl = document.querySelector(".holders")
// var place1El = document.querySelector(".place-1st")
// var place2El = document.querySelector(".place-2nd")
// var place3El = document.querySelector(".place-3rd")
// var place4El = document.querySelector(".place-4th")
// var place5El = document.querySelector(".place-5th")
// Quiz Time Section
var quizEl = document.querySelector(".quiz-time")
var timerEl = document.querySelector(".quiz-timer")
var secondsLeft = 51
// Question Section
var questionEl = document.querySelector("#question")
var questionCount = 0;
// Final Score Section
var resultEl = document.querySelector("#final")
var finalScoreEl = document.querySelector(".score-result")
var nameInput = document.querySelector("#input-name")
var submitEl = document.querySelector("#submit-record")

// Score Array
var scoreCount = 0;

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
    },
    {
        // 6th Question
        question: "What was the name of the Friendly Ghost?",
        answers: ["Casper", "Boo", "Luke", "Emia"],
        correctAnswer: "0"
    },
    {
        // 7th Question
        question: "Which of the following is the antagonist in The Matrix",
        answers: ["Neo", "Trinity", "Agent Smith", "Morpheus"],
        correctAnswer: "2"
    },
    {
        // 8th Question
        question: "Where did Kevin's family travel to in Home Alone",
        answers: ["New York", "Paris", "Los Angeles", "London"],
        correctAnswer: "1"
    },
    {
        // 9th Question
        question: "The Terminator's Famous Quote was",
        answers: ["I'll be back", "Run Forest, Run!", "Say hello to my little friend", "Say ???What??? Again! I Dare You! I Double-Dare You, Motherf*****"],
        correctAnswer: "0"
    },
    {
        // 10th Question
        question: "What is Superman's original name, the one he was born with?",
        answers: ["Clark Kent", "Steve Rogers", "Barry Allen", "Kal'el"],
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
            finalScore()
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

    displayScores()
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
        scoreCount++
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
function finalScore() {
    quizEl.style.display = "none";
    resultEl.style.display = "block";
    finalScoreEl.textContent = ("You scored " + scoreCount + " out of " + questions.length)
}

var userList = []

// function to add scores to local storage
function addScore(event) {
    event.preventDefault()

    resultEl.style.display = "none"
    recordsEl.style.display = "block"

    var user = {
        recordName: nameInput.value.trim(),
        score: scoreCount,
    }

    // add your scores to a record of lists
    if (!localStorage.getItem("userlist")) {
        userList.push(user)
        console.log("user doesnt exist")
        localStorage.setItem("userlist", JSON.stringify(userList))
    } else {
        userList = JSON.parse(localStorage.getItem("userlist"))
        userList.push(user)
        localStorage.setItem("userlist", JSON.stringify(userList))
    }

    // add to local storage
    localStorage.setItem("user", JSON.stringify(user));

    showRecords()
}


function displayScores() {
    var tempUserList = JSON.parse(localStorage.getItem("userlist"))

    // sort scores
    tempUserList = tempUserList.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }
    });

    // pull scores from local storage then put them to a list
    for (let i = 0; i < tempUserList.length; i++) {
        let li = document.createElement("li");
            li.textContent = `${tempUserList[i].recordName}: ${tempUserList[i].score}`;
            holdersEl.append(li);
    }
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
// Submit Name to Records
submitEl.addEventListener("click", addScore)