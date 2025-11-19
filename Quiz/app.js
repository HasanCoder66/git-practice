// // console.log("js is running -->")
// // window.location.reload(1)
// let quizAppContainer = document.querySelector(".quiz-container");
// let question = document.querySelector(".question");
// let options = document.querySelector(".options");
// let nextBtn = document.querySelector(".next");
// let prevBtn = document.querySelector(".prev");
// let startQuizBtn = document.querySelector(".start-quiz");

// // console.log(startQuizBtn)
// let startQuiz = false;

// const quizStart = () => {
//   // this.startQuiz = true;
//   startQuiz = true;
//    if (startQuiz) {
//     quizAppContainer.innerHTML = `<div class="header">
//         <h1>Quiz App</h1>
//       </div>

//       <div class="quiz-body">
//         <h1 class="question">1) What is a JavaScript ?</h1>

//         <div class="options">
//           <button>Js is Programming Language</button>
//           <button>Js is Programming Language</button>
//           <button>Js is Programming Language</button>
//           <button>Js is Programming Language</button>
//         </div>

//         <div class="btns">
//           <button class="prev" >Previous</button>
//           <button class="next">Next</button>

//         </div>
//       </div>`
//   }else {
//     quizAppContainer.innerHTML = `<div class="header">
//         <h1>Quiz App</h1>
//       </div>

//       <div class="quiz-body">

//         <div class="btns">
//           <button class="start-quiz">Start Quiz</button>

//         </div>
//       `;

//   }
// };

// console.log(startQuiz)

// // Quiz Data
// let quizData = [
//   {
//     question: "What does HTML stand for?",
//     options: [
//       "Hyper Text Markup Language",
//       "Home Tool Markup Language",
//       "Hyperlinks and Text Markup Language",
//       "Hyperlinking Text Marking Language",
//     ],
//     answer: 0,
//   },
//   {
//     question: "What does CSS stand for?",
//     options: [
//       "Cascading Style Sheets",
//       "Creative Style System",
//       "Computer Style Sheet",
//       "Colorful Style Sheets",
//     ],
//     answer: 0,
//   },
//   {
//     question: "Which language runs in a web browser?",
//     options: ["Python", "C++", "JavaScript", "Java"],
//     answer: 2,
//   },
//   {
//     question: "Inside which HTML element do we put JavaScript?",
//     options: ["<javascript>", "<script>", "<js>", "<scripting>"],
//     answer: 1,
//   },
//   {
//     question: "What does JSON stand for?",
//     options: [
//       "JavaScript Online Notation",
//       "Java Object Notation",
//       "JavaScript Object Notation",
//       "Joined Server Objects Name",
//     ],
//     answer: 2,
//   },
//   {
//     question: "Which symbol is used for comments in JavaScript?",
//     options: ["// Comment", "<!-- Comment -->", "** Comment **", "# Comment"],
//     answer: 0,
//   },
//   {
//     question: "Which method is used to print something in the console?",
//     options: [
//       "console.print()",
//       "log.console()",
//       "console.log()",
//       "print.console()",
//     ],
//     answer: 2,
//   },
//   {
//     question: "Which HTML tag is used to link external JavaScript?",
//     options: ["<link>", "<js>", "<script src=''>", "<style>"],
//     answer: 2,
//   },
// ];

// let currentIndex = 0;
// let score = 0;

// console.log(currentQuestion)

// for(let i = 0; )

// console.log(quizAppContainer)
// console.log(question)
// console.log(options)
// console.log(nextBtn)
// console.log(prevBtn)
// console.log(quizData[0].options)

// const nextHandler = () => {
//   if (currentIndex < quizData.length - 1) {
//     ++currentIndex;
//     let currentQuestion = quizData[currentIndex];
//     // console.log(currentIndex);
//     // console.log("Current Questions -->", currentQuestion);
//     question.innerHTML = `${currentIndex + 1}) ${currentQuestion.question}`;

//     // console.log()
//     for (let i = 0; i < currentQuestion.options.length; i++) {
//       let createBtn = document.createElement("button");
//       // console.log(createBtn)

//       // console.log(currentQuestion.options[i])

//       let optionsNode = document.createTextNode(currentQuestion.options[i]);

//       // console.log(textNode)
//       createBtn.appendChild(optionsNode);
//       options.appendChild(createBtn);
//       // options.innerHTML = `${createBtn}`
//     }
//   }
// };

// const prevHandler = () => {
//   if (currentIndex > 0) {
//     // console.log(prevBtn.style)
//     --currentIndex;
//     let currentQuestion = quizData[currentIndex];
//     // console.log(currentIndex)
//     // console.log("Current Questions -->", currentQuestion);
//     // console.log(question.innerHTML)
//     question.innerHTML = `${currentIndex + 1}) ${currentQuestion.question}`;
//   }
// };

// // console.log(startQuizBtn)
// // click events
// nextBtn.onclick = nextHandler;
// prevBtn.onclick = prevHandler;
// startQuizBtn.onclick = quizStart;

let startQ = false;
let currentQuestionIndex = 0;
let score = 0;

// Quiz Data
let quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Marking Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Sheet",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "C++",
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["javascript", "script", "js", "scripting"],
    answer: "javascript",
  },
  {
    question: "What does JSON stand for?",
    options: [
      "JavaScript Online Notation",
      "Java Object Notation",
      "JavaScript Object Notation",
      "Joined Server Objects Name",
    ],
    answer: "Java Object Notation",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["// Comment", "!-- Comment --", "** Comment **", "# Comment"],
    answer: "// Comment",
  },
  {
    question: "Which method is used to print something in the console?",
    options: [
      "console.print()",
      "log.console()",
      "console.log()",
      "print.console()",
    ],
    answer: "log.console()",
  },
  {
    question: "Which HTML tag is used to link external JavaScript?",
    options: ["link", "js", "script src=''", "style"],
    answer: "js",
  },
];

let quizAppContainer = document.querySelector(".main");
let startScreen = document.querySelector(".startScreen");
let endScreen = document.querySelector(".endScreen");
console.log(endScreen);

const reloadMethod = () => {
  RetartQuiz(this);
};
const showResult = () => {
  let result = document.getElementById("result");
  // console.log(result)
  result.innerHTML = `
  You Score ${score + 1} Out of ${quizData.length}
  `;
  // let restartBtn = document.querySelector(".startbtn");
  // // restartBtn.onclick = reloadMethod;

  // console.log(result)
};

const loadData = () => {
  console.log("mai chl hon -->")
  let currentQuestion = quizData[currentQuestionIndex];
  if (currentQuestionIndex <= quizData.length - 1) {
    quizAppContainer.innerHTML = `
  <div class="container-quiz">
    <div >
      <h1 id="mainHeading">
      JavaScript Quiz App
    </h1>

    <p class="que">Question ${currentQuestionIndex + 1} out of ${
      quizData.length
    } </p>

    <div class="question">
      <h1>${currentQuestion.question}</h1>

    </div>
    <div class="options">
      <button onclick=checkAns(this) >${currentQuestion.options[0]}</button>
      <button onclick=checkAns(this)>${currentQuestion.options[1]}</button>
      <button onclick=checkAns(this)>${currentQuestion.options[2]}</button>
      <button onclick=checkAns(this)>${currentQuestion.options[3]}</button>
    </div>
    </div>


  
  </div>
`;
  } else {
    quizAppContainer.classList.add("hidden");
    endScreen.classList.remove("hidden");
    showResult();
  }
};

const checkAns = (e) => {
  // console.log("mai chl raha hon" ,e.innerText)
  let userAns = e.innerHTML;
  let currentQuestion = quizData[currentQuestionIndex];
  // console.log(currentQuestion)

  if (currentQuestion.answer.toLowerCase() == userAns.toLowerCase()) {
    // console.log("right answer ");
    e.style.backgroundColor = "green";
    e.style.color = "white";
    score++;
    currentQuestionIndex++;
    // console.log("Current score",score)
    setTimeout(() => {
      loadData();
    }, 1000);
  } else {
    // console.log("wrong answer");
    e.style.backgroundColor = "red";
    currentQuestionIndex++;
    setTimeout(() => {
      loadData();
    }, 1000);
  }
};

const startQuiz = () => {
  startQ = true;
  // console.log(startScreen.style.display)
  startScreen.classList.add("hidden");
  loadData();
};


// const RetartQuiz = (e) => {
//   // console.log(e);
//   let endScreen = document.querySelector(".endScreen");
//   endScreen.classList.add("hidden")
//   startScreen.classList.remove("hidden")
//    currentQuestionIndex = 0;
//   score = 0;

//   loadData();
// };





const RetartQuiz = (e) => {
  let endScreen = document.querySelector(".endScreen");
  endScreen.classList.add("hidden");  
  quizAppContainer.classList.remove("hidden"); 

  currentQuestionIndex = 0;
  score = 0;

  loadData();
};
