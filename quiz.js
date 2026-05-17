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
// Start Index for Array
let startIndex = 0;
let punkte = 0;

//OnLOadListener
document.addEventListener("DOMContentLoaded", showQuestion(startIndex));

function showQuestion(index) {
  // Set Question

  let newQuestion = document.getElementById("questtion");
  newQuestion.innerHTML = questions[index].question;

  let answerContainer = document.getElementById("answerContainer");
  answerContainer.innerHTML = "";

  //   Randomize Answers and Create Answers

  let randomAnswer = randomizeAnswer(questions[index].answer).forEach(
    (element) => {
      let newAnswer = document.createElement("p");
      newAnswer.classList.add("answer");
      newAnswer.innerHTML = element;

      // Set Eventlistener and Check Answers
      newAnswer.addEventListener("click", () => {
        if (newAnswer.innerHTML === questions[index].correct) {
          alert(`Richtig ${newAnswer.innerHTML}`);
          newAnswer.classList.add("correct");
          punkte++;
          setScore(punkte);
        } else {
          alert(`${newAnswer.innerHTML} ist leider Falsch`);
          newAnswer.classList.add("notCorrect");
        }
      });
      answerContainer.appendChild(newAnswer);
    },
  );
  setScore(punkte);
}

function nextQuestion() {
  if (startIndex !== questions.length - 1) {
    startIndex++;
    showQuestion(startIndex);
    console.log("next");
  } else {
    startIndex = 0;
    punkte = 0;
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

function randomizeAnswer(answerArray) {
  let randomAnswerArr = [];
  answerArray.forEach((elm) => {
    let index = Math.floor(Math.random() * answerArray.length);
    randomAnswerArr.splice(index, 0, elm);
  });

  return randomAnswerArr;
}

function setScore(currScore) {
  document.getElementById("score").innerHTML = `Punkte: ${currScore}`;
}
