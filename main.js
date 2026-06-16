// Quiz Logic
const quizStates = [
    {
        question: "What mood do you want to evoke?",
        options: [
            { text: "Romantic & Sensual", value: "romantic" },
            { text: "Fresh & Clean", value: "fresh" },
            { text: "Mysterious & Bold", value: "mysterious" }
        ]
    },
    {
        question: "Which setting do you prefer?",
        options: [
            { text: "A blooming garden at twilight", value: "floral" },
            { text: "A crisp morning by the ocean", value: "citrus" },
            { text: "A cozy cabin with a crackling fire", value: "woody" }
        ]
    }
];

let currentQuestion = 0;
let userPreferences = [];

const quizForm = document.getElementById('quiz-form');
const quizResult = document.getElementById('quiz-result');
const questionEl = document.getElementById('quiz-question');
const optionsEl = document.querySelector('.quiz-options');
const resultTitle = document.getElementById('result-title');

function renderQuestion() {
    if (currentQuestion >= quizStates.length) {
        showResult();
        return;
    }

    const state = quizStates[currentQuestion];
    questionEl.textContent = state.question;
    optionsEl.innerHTML = '';

    state.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'w-full py-4 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-white transition-colors duration-400';
        btn.textContent = opt.text;
        btn.onclick = () => handleAnswer(opt.value);
        optionsEl.appendChild(btn);
    });
}

function handleAnswer(value) {
    userPreferences.push(value);
    currentQuestion++;
    renderQuestion();
}

function showResult() {
    quizForm.classList.add('hidden');
    quizResult.classList.remove('hidden');

    let recommendation = "Golden Vanilla";
    if (userPreferences.includes("romantic") || userPreferences.includes("floral")) {
        recommendation = "Velvet Rose";
    } else if (userPreferences.includes("mysterious") || userPreferences.includes("woody")) {
        recommendation = "Midnight Oud";
    } else {
        recommendation = "L'Air Pur";
    }

    resultTitle.textContent = recommendation;
}

window.resetQuiz = function() {
    currentQuestion = 0;
    userPreferences = [];
    quizResult.classList.add('hidden');
    quizForm.classList.remove('hidden');
    renderQuestion();
};

// Initialize quiz
if(quizForm) {
    renderQuestion();
}
