const quizData = [{
        question: 'How old is dipali',
        a: '10',
        b: '12',
        c: '18',
        d: '22',
        correct: 'd'

    },
    {
        question: 'what is the most used programming langauge in 2019?',
        a: 'java',
        b: 'python',
        c: 'c',
        d: 'javascript',
        correct: 'a'
    },
    {
        question: 'Who is the president of us?',
        a: 'florin pop',
        b: 'donald trump',
        c: 'Ivan Saldon',
        d: 'mihari andrei',
        correct: 'b'

    },
    {
        question: 'What does HTMK stands For?',
        a: 'Hpertext Markup Language',
        b: 'Appliication programming interface',
        c: 'CCascaiding Style Sheet',
        d: 'mihari andrei',
        correct: 'a'
    },
    {
        question: 'What year was javascript launch?',
        a: '1996',
        b: '1995',
        c: '1997',
        d: '1998',
        correct: 'a'
    }
];

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");




let currentQuiz = 0;
let lenght = quizData.length;
console.log(lenght);

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    console.log(currentQuizData);

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;



}

submitBtn.addEventListener('click', () => {
    var ans = document.querySelector('input[name="answer"]:checked').value;
    console.log(ans);
    if (ans == quizData[currentQuiz].correct) {
        alert("your ans is correct");
        currentQuiz++;
    } else {
        alert("your ans is worng");

    }
    loadQuiz();

})