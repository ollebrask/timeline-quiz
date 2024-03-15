// buttons
const startButton = document.getElementById('start-btn');
const beforeButton = document.getElementById('before-btn');
const afterButton = document.getElementById('after-btn');
const nextButton = document.getElementById('next-btn');
const questionBoxElement = document.getElementById('question-box');

//eventlisteners for clicking buttons
startButton.addEventListener('click', startQuiz);
beforeButton.addEventListener('click', selectBefore);
afterButton.addEventListener('click', selectAfter);
nextButton.addEventListener('click', selectNext);

//functions
function startQuiz() {
    console.log('started');
    startButton.classList.add('hide');
    questionBoxElement.classList.remove('hide');
    nextQuestion();
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