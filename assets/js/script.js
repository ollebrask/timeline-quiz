// buttons
const startButton = document.getElementById('start-btn');
const beforeButton = document.getElementById('before-btn');
const afterButton = document.getElementById('after-btn');
const nextButton = document.getElementById('next-btn');
const retryButton = document.getElementById('retry-btn');
const questionBoxElement = document.getElementById('question-box');
const questionElement = document.getElementById('question');
const questionImg = document.getElementById('question-image');

//variables for shuffling questions and keeping track of currentquestion.
let shuffledQuestion;
let currentQuestion;

//correct year
const treshold = 1950;

//eventlisteners for clicking buttons
startButton.addEventListener('click', startQuiz);
beforeButton.addEventListener('click', selectBefore);
afterButton.addEventListener('click', selectAfter);
nextButton.addEventListener('click', selectNext);

//functions
function startQuiz() {
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestion = questionsData.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionBoxElement.classList.remove('hide');
    nextQuestion();
}

//Function for shuffle the next question.
function nextQuestion() {
    showQuestion(shuffledQuestion[currentQuestion]);
}

//To show the question
function showQuestion(question) {
    questionElement.innerText = question.question;
    questionImg.src = question.image;
}

//Function for before-button
function selectBefore() {
    console.log('Before');
    if (shuffledQuestion[currentQuestion].correctYear < treshold) {
        increaseRight();
    } else {
        increaseWrong();
    }
    revealTimeline(shuffledQuestion[currentQuestion].correctYear);
    nextButton.classList.remove('hide');
}

//Function for after-button
function selectAfter() {
    console.log('After');
    if (shuffledQuestion[currentQuestion].correctYear > treshold) {
        increaseRight();
    } else {
        increaseWrong();
    }
    revealTimeline(shuffledQuestion[currentQuestion].correctYear);
    nextButton.classList.remove('hide');
}

//Function for next-button
function selectNext() {
    console.log('Next');
    currentQuestion++;
    if (currentQuestion < shuffledQuestion.length) {
        nextQuestion();
        nextButton.classList.add('hide');
    } else {
        console.log('End of quiz');
        nextButton.classList.add('hide');
        retryButton.classList.remove('hide');
    }
}

//Gets current score and increase by 1
function increaseRight() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

//Gets current wrong score and increase by 1
function increaseWrong() {
    let oldScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldScore;
}

//Function for revealing the correct year and picture on timeline.
function revealTimeline(correctYear) {
    //select all div in both left and right group.
    const timelineDivs = document.querySelectorAll('.timeline .left-group div, .timeline .right-group div');

    //search through the divs to match with correct year and remove hide. break when done
    for (let i = 0; i < timelineDivs.length; i++) {
        if (parseInt(timelineDivs[i].innerText) === correctYear) {
            timelineDivs[i].classList.remove('hide');
            break;
        }
    }
}

//questions for the quiz
const questionsData = [{
        "question": "Motorola designed the world's first handheld mobile phone, but was the first official call made before or after 1950?",
        "correctYear": 1973,
        "image": "assets/images/athletes.webp"
    },
    {
        "question": "The record company Columbia made a breakthrough when they launched the first LP. Was it before or after 1950?",
        "correctYear": 1948,
        "image": "assets/images/athletes.webp"
    },
    {
        "question": "Guinness brewery made a big change, they began using nitrogen instead of carbon dioxide. But was it before or after 1950?",
        "correctYear": 1959,
        "image": "assets/images/athletes.webp"
    },
    {
        "question": "Stockholms highest tower Kaknästornet has a restaurant 134 meter above ground. Was it built before or after 1950?",
        "correctYear": 1967,
        "image": "assets/images/athletes.webp"
    },
    {
        "question": "The world's first electrical computer was 30 meters long. Was it built before or after 1950?",
        "correctYear": 1946,
        "image": "assets/images/athletes.webp"
    },
    {
        "question": "The first ballpoint pen was a clear improvement over the ink pen. Was it invented before or after 1950?",
        "correctYear": 1938,
        "image": "assets/images/athletes.webp"
    }
]