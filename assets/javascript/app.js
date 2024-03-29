let number = 31;

let intervalId;


$("#start").on("click", run);


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}

function decrement() {

number--;

$("#timer").html("<h2>" + number + "</h2>");


if (number === 0) {

    clearInterval(intervalId);
    }

}






(function() {
  function buildQuiz() {
    
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answers = [];

    
      for (letter in currentQuestion.answers) {
     
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

    
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

   
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
  
    const answerContainers = quizContainer.querySelectorAll(".answers");

    
    let numCorrect = 0;

 
    myQuestions.forEach((currentQuestion, questionNumber) => {
     
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

     
      if (userAnswer === currentQuestion.correctAnswer) {
 
        numCorrect++;

        
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
      
        answerContainers[questionNumber].style.color = "red";
      }
    });

 
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

  buildQuiz();

 
  submitButton.addEventListener("click", showResults);
})();



