const questions = [
  {
    question: "Wie lautet die Hauptstadt von Deutschland?",
    answer: ["Berlin", "München", "Frankfurt", "Bonn"],
    correct: "Berlin",
  },

  {
    question: "Welcher Planet unseres Sonnensystems ist der Sonne am nächsten?",
    answer: ["Venus", "Merkur", "Mars", "Jupiter"],
    correct: "Merkur",
  },

  {
    question: "Wer schrieb das berühmte Drama 'Faust'?",
    answer: [
      "Friedrich Schiller",
      "Heinrich Heine",
      "Johann Wolfgang von Goethe",
      "Thomas Mann",
    ],
    correct: "Johann Wolfgang von Goethe",
  },

  {
    question: "Was ist das chemische Symbol für Gold?",
    answer: ["Ag", "Fe", "Gd", "Au"],
    correct: "Au",
  },
];

let startIndex = 0;

document.addEventListener("DOMContentLoaded", showQuestion(startIndex));

function showQuestion(index) {
  let newQuestion = document.getElementById("questtion");
  newQuestion.innerHTML = questions[index].question;

  let answerContainer = document.getElementById("answerContainer");
  answerContainer.innerHTML = "";

  questions[index].answer.forEach((element) => {
    let newAnswer = document.createElement("p");
    newAnswer.classList.add("answer");
    newAnswer.innerHTML = element;

    newAnswer.addEventListener("click", () => {
      showAnswer();
    });
    answerContainer.appendChild(newAnswer);
  });
}

function nextQuestion() {
  if (startIndex !== questions.length - 1) {
    startIndex++;
    showQuestion(startIndex);
    console.log("next");
  } else {
    startIndex = 0;
    showQuestion(startIndex);
    console.log("von vorne");
  }
}

function showAnswer() {
  let answers = document.querySelectorAll(".answer");
  answers.forEach((elm) => {
    if (elm.innerHTML === questions[startIndex].correct) {
      elm.classList.add("correct");
    } else if (elm.innerHTML !== questions[startIndex].correct) {
      elm.classList.add("notCorrect");
    }
  });
}
