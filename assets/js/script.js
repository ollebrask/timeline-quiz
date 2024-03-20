// variables
const startButton = document.getElementById('start-btn');
const beforeButton = document.getElementById('before-btn');
const afterButton = document.getElementById('after-btn');
const nextButton = document.getElementById('next-btn');
const resultButton = document.getElementById('result-btn');
const retryButton = document.getElementById('retry-btn');
const questionBoxElement = document.getElementById('question-box');
const questionElement = document.getElementById('question');
const questionImg = document.getElementById('question-image');
const informationText = document.getElementById('information');
const retryText = document.getElementById('retry');
const timeline = document.getElementById('timeline');
const scoreArea = document.getElementById('score-area');

//Code for shuffling and keeping track of questions inspired by Web Dev Simplified.
let shuffledQuestion;
let currentQuestion;

//correct year
const treshold = 1950;

//eventlisteners for clicking buttons
startButton.addEventListener('click', startQuiz);
beforeButton.addEventListener('click', selectBefore);
afterButton.addEventListener('click', selectAfter);
nextButton.addEventListener('click', selectNext);
resultButton.addEventListener('click', selectResult);

//to reload the page when clicking the retryButton
retryButton.addEventListener('click', function () {
    location.reload();
});

/** Function for starting quiz.
 *Code for shuffling and keeping track of question inspired by Web Dev Simplified.
 */
function startQuiz() {
    console.log('started');
    startButton.classList.add('hide');
    informationText.classList.add('hide');
    shuffledQuestion = questionsData.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionBoxElement.classList.remove('hide');
    timeline.classList.remove('hide');
    scoreArea.classList.remove('hide');
    nextQuestion();
}

/** Function for shuffle the next question.
 * Code inspired by Web Dev Simplified
 */
function nextQuestion() {
    showQuestion(shuffledQuestion[currentQuestion]);
}

/** Function to show the question.
 */
function showQuestion(question) {
    questionElement.innerText = question.question;
    questionImg.src = question.image;
}

/**Function for before-button
 * if correct increaseRight and make green
 * if wrong increaseWrong and make red
 */
function selectBefore() {
    console.log('Before');
    //to make the button not clickable until next question
    beforeButton.disabled = true;
    afterButton.disabled = true;
    //What happens if it is right/wrong
    if (shuffledQuestion[currentQuestion].correctYear < treshold) {
        increaseRight();
        beforeButton.classList.add('correct');
        afterButton.classList.add('wrong');
    } else {
        increaseWrong();
        beforeButton.classList.add('wrong');
        afterButton.classList.add('correct');
    }
    revealTimeline(shuffledQuestion[currentQuestion].correctYear);

    //Check if its the last question
    if (currentQuestion === shuffledQuestion.length - 1) {
        resultButton.classList.remove('hide');
    } else {
        nextButton.classList.remove('hide');
    }
}

/**Function for after-button
 * if correct increaseRight and make green
 * if wrong increaseWrong and make red
 */
function selectAfter() {
    console.log('After');
    //to make the button not clickable until next question
    beforeButton.disabled = true;
    afterButton.disabled = true;
    //What happens if it is right/wrong
    if (shuffledQuestion[currentQuestion].correctYear > treshold) {
        increaseRight();
        afterButton.classList.add('correct');
        beforeButton.classList.add('wrong');
    } else {
        increaseWrong();
        afterButton.classList.add('wrong');
        beforeButton.classList.add('correct');
    }
    revealTimeline(shuffledQuestion[currentQuestion].correctYear);
    
    //Check if its the last question
    if (currentQuestion === shuffledQuestion.length - 1) {
        resultButton.classList.remove('hide');
    } else {
    nextButton.classList.remove('hide');
    }
}

/**Function for next-button
 * if there are questions left, nextQuestion
 * if end of quiz show retry-button
 */
function selectNext() {
    console.log('Next');
    //to enable the before and after button again
    questionCount();
    beforeButton.disabled = false;
    afterButton.disabled = false;
    currentQuestion++;
    if (currentQuestion < shuffledQuestion.length) {
        nextQuestion();
        nextButton.classList.add('hide');
        beforeButton.classList.remove('wrong', 'correct');
        afterButton.classList.remove('wrong', 'correct');
    } 
}

/** Function for revealing the results
 */
function selectResult() {
    console.log('End of quiz');
    nextButton.classList.add('hide');
    retryButton.classList.remove('hide');
    beforeButton.classList.remove('wrong', 'correct');
    beforeButton.classList.add('hide');
    afterButton.classList.remove('wrong', 'correct');
    afterButton.classList.add('hide');
    questionBoxElement.classList.add('hide');
    resultButton.classList.add('hide');
    retryText.classList.remove('hide');
}

/** Function to increase the questionCounter, inspired by Love Math walkthrough */
function questionCount() {
    let questionNumber = parseInt(document.getElementById("count-qst").innerText);
    document.getElementById("count-qst").innerText = ++questionNumber;
}
/**Gets current score and increase by 1, inspired by Love Math walkthrough
 */
function increaseRight() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**Gets current wrong score and increase by 1, inspired by Love Math walkthrough
 */
function increaseWrong() {
    let oldScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldScore;
}

/**Function for revealing the correct year and picture on timeline.
 */
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
        "image": "assets/images/phone.webp"
    },
    {
        "question": "The record company Columbia made a breakthrough when they launched the first LP. Was it before or after 1950?",
        "correctYear": 1948,
        "image": "assets/images/lp.webp"
    },
    {
        "question": "Guinness brewery made a big change, they began using nitrogen instead of carbon dioxide. But was it before or after 1950?",
        "correctYear": 1959,
        "image": "assets/images/beer.webp"
    },
    {
        "question": "Stockholms highest tower Kaknästornet has a restaurant 134 meter above ground. Was it built before or after 1950?",
        "correctYear": 1967,
        "image": "assets/images/tower.webp"
    },
    {
        "question": "The world's first electrical computer was 30 meters long. Was it built before or after 1950?",
        "correctYear": 1946,
        "image": "assets/images/computer.webp"
    },
    {
        "question": "The first ballpoint pen was a clear improvement over the ink pen. Was it invented before or after 1950?",
        "correctYear": 1938,
        "image": "assets/images/pen.webp"
    }
]