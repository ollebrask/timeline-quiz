// buttons
const startButton = document.getElementById('start-btn');
const beforeButton = document.getElementById('before-btn');
const afterButton = document.getElementById('after-btn');
const nextButton = document.getElementById('next-btn');
const questionBoxElement = document.getElementById('question-box');
const questionElement = document.getElementById('question');

//variables for shuffling questions and keeping track of currentquestion.
let shuffledQuestion;
let currentQuestion;

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

function nextQuestion() {
    showQuestion(shuffledQuestion[currentQuestion]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
}

function selectBefore() {
    console.log('Before');
}

function selectAfter() {
    console.log('After');
}

function selectNext() {
    console.log('Next');
}

//questions for the quiz
const questionsData = [{
        "question": "The tower blablabla has a big restaurang at the the top, was it invented before or after 1950?",
        "correctYear": 1991
    },
    {
        "question": "The big bang was blablabla, was it before or after 1950?",
        "correctYear": 1946
    }
]