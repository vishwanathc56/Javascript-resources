const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
];


const quizContainer = document.getElementById('quizContainer');
const nextButton = document.getElementById('nextButton');
const resultContainer = document.getElementById('resultContainer');

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question and options
function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <form id="optionsForm">
            ${currentQuestion.options.map((option, index) => `
                <label>
                    <input type="radio" name="option" value="${index}">
                    ${option}
                </label>
            `).join('')}
        </form>
    `;
}

function checkAnswer() {
    const optionsForm = document.getElementById('optionsForm');
    const selectedOption = Number(optionsForm.option.value);

    if (selectedOption === quizQuestions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.innerHTML = `<h2>Your Score: ${score} out of ${quizQuestions.length}</h2>`;
}

nextButton.addEventListener('click', checkAnswer);

showQuestion();
