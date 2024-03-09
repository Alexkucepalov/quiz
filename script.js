var quizData = [
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
var questionElement = document.getElementById('question');
var answerButtons = document.getElementById('answers');
var resultElement = document.getElementById('result');
var currentQuestion = 0;
var score = 0;
// отображаем вопросы и создаем кнопки для вариантов
function showQuestion(questionIndex) {
    var question = quizData[questionIndex];
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(function (answer, index) {
        var button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', function () { return checkAnswer(index); });
        answerButtons.appendChild(button);
    });
}
function checkAnswer(answerIndex) {
    var correctAnswerIndex = quizData[currentQuestion].correctAnswer;
    // проверяем ответ и подсвечивем правильный и неправильный
    var buttons = answerButtons.querySelectorAll('button');
    buttons.forEach(function (button, index) {
        if (index === correctAnswerIndex) {
            button.classList.add('correct');
        }
        else if (index === answerIndex) {
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
        setTimeout(function () {
            showQuestion(currentQuestion);
        }, 1000);
    }
    else {
        var percentage = (score / quizData.length) * 100;
        resultElement.textContent = "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432: ".concat(percentage, "%");
    }
}
showQuestion(currentQuestion);
