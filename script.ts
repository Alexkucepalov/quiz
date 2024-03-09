const quizData = [
    {
        question: "Столица России",
        answers: ["Москва", "Красноярск", "Волгоград", "Санкт-Петербург"],
        correctAnswer: 0
    },
    {
        question: "Столица Испании",
        answers: ["Барселона", "Мадрид", "Валенсия", "Севилья"],
        correctAnswer: 1
    },
    {
        question: "Столица Финляндии",
        answers: ["Оулу", "Турку", "Хельсинки", "Вантаа"],
        correctAnswer: 2
    },
    {
        question: "Столица Норвегии",
        answers: ["Берген", "Саннвика", "Молде", "Осло"],
        correctAnswer: 3
    }
];

const questionElement = document.getElementById('question') as HTMLElement;
const answerButtons = document.getElementById('answers') as HTMLElement;
const resultElement = document.getElementById('result') as HTMLElement;

let currentQuestion = 0;
let score = 0;


// отображаем вопросы и создаем кнопки для вариантов
function showQuestion(questionIndex: number) {
    const question = quizData[questionIndex];
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => checkAnswer(index));
        answerButtons.appendChild(button);
    });
}


function checkAnswer(answerIndex: number) {
    const correctAnswerIndex = quizData[currentQuestion].correctAnswer;

    // проверяем ответ и подсвечивем правильный и неправильный
    const buttons = answerButtons.querySelectorAll('button');
    buttons.forEach((button, index) => {
        if (index === correctAnswerIndex) {
            button.classList.add('correct');
        } else if (index === answerIndex) {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    // обновляем счет и переходим к следующему вопросу
    if (answerIndex === correctAnswerIndex) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        setTimeout(() => {
            showQuestion(currentQuestion);
        }, 1000);
    } else {
        const percentage = (score / quizData.length) * 100;
        resultElement.textContent = `Процент правильных ответов: ${percentage}%`;
    }
}

showQuestion(currentQuestion);
