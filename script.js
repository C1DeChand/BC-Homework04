// timer content //

var start = document.getElementById("start");
var questionsList = document.getElementById("question-text");

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function begin() {
        var twoMinutes = 60 * 1,
            display = document.querySelector("#time");
        startTimer(twoMinutes, display);
        document.getElementById("startBox").innerHTML = "";
};

// Quiz questions display //

var questionsList = [
    {
        question: "Which is not a data type in JavaScript?",
        optionA: "Alert",
        optionB: "Boolean",
        optionC: "String",
        correct: "A"
    },
    {
        question: "Who created JavaScript?",
        optionA: "Sheryl Sandberg",
        optionB: "Brendan Eich",
        optionC: "Douglas Crockford",
        correct: "B"
    },
    {
        question: "Which syntax belongs to JavaScript?",
        optionA: ".className { color: red; }",
        optionB: "document.getElementById()",
        optionC: "<p>This is text</p>",
        correct: "B"
    },
    {
        question: "Where can you find <script> tags in an HTML file?",
        optionA: "<body>",
        optionB: "<head>",
        optionC: "Both",
        correct: "C"
    },
    {
        question: "If a variable is defined globally in JavaScript, where can it be used?",
        optionA: "Only in child functions",
        optionB: "Anywhere",
        optionC: "Variables cannot be defined globally",
        correct: "B"
    }
];

console.log(questionsList)

// question controls //

// var optionOne = document.getElementById("answerOne");
// var optionTwo = document.getElementById("answerTwo");
// var optionThree = document.getElementById("answerThree");
var counter = document.getElementById("counter");
var scoreDiv = document.getElementById("scoreContainer");
var lastQuestion = questionsList.length - 1;
var questionIndex = 0;
var count = 0;
var score = 0;

function showQuestion(){
    var questions = questionsList[questionIndex];
    
    questions.getElementById("question-text").textContent = questionsList.question;
    questions.getElementById("answerOne").textContent = questionsList.optionA;
    questions.getElementById("answerTwo").textContent = questionsList.optionB;
    questions.getElementById("answerThree").textContent = questionsList.optionC;

    console.log(showQuestion)
}

start.addEventListener("click",begin);

// question box visibility //

start.onclick = () => {
    var vis = document.querySelector("#questionBox");
    if (vis.classList.contains("visibility")) {
      vis.classList.remove("visibility");
  
    }
  }

  // scorekeeper //

function factCheck(answer){
    if( answer == questionsList[questionIndex].correct){
        score++;
        correctAnswer();
    }else{
        incorrectAnswer();
    }
    count = 0;
    if(questionIndex < lastQuestion){
        questionIndex++;
        showQuestion();
    }else{
        score();
    }
}

function correctAnswer(){
    document.getElementById(questionIndex).innerHTML = "Correct!";
}

function incorrectAnswer(){
    document.getElementById(questionIndex).innerHTML = "Incorrect!";
}

// scoreboard //

function scoreFn(){
    scoreDiv.innerHTML += "<p>"+ score +"</p>";
}

// FOR SAFE KEEPING ////////////////////////////////////////////////////////

// var score = 0;
// var questionsList = [
    
//     "<div class='card-body ml-center'><h5 class='card-title'>Question One</h5><br><p class='card-text'><strong>Commonly used data types do not include?</strong></p><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>1. Booleans</button><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>2. Arrays</button><br><button class='btn btn-dark btn-lg' type='submit' id='correct' style='margin: 5px; color: white;'>3. Alerts</button><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>4. Strings</button></div>",
//     "<div class='card-body ml-center'><h5 class='card-title'>Question One</h5><br><p class='card-text'><strong>Who created JavaScript?</strong></p><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>1. Douglas Crockford</button><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>2. Sheryl Sandberg</button><br><button class='btn btn-dark btn-lg' type='submit' id='correct' style='margin: 5px; color: white;'>3. Brendan Eich</button>",
//     "<div class='card-body ml-center'><h5 class='card-title'>Question One</h5><br><p class='card-text'><strong>Commonly used data types do not include:</strong></p><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>1. Booleans</button><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>2. Arrays</button><br><button class='btn btn-dark btn-lg' type='submit' id='correct' style='margin: 5px; color: white;'>3. Alerts</button><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>4. Strings</button></div>",
//     "<div class='card-body ml-center'><h5 class='card-title'>Question One</h5><br><p class='card-text'><strong>Commonly used data types do not include:</strong></p><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>1. Booleans</button><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>2. Arrays</button><br><button class='btn btn-dark btn-lg' type='submit' id='correct' style='margin: 5px; color: white;'>3. Alerts</button><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>4. Strings</button></div>",
//     "<div class='card-body ml-center'><h5 class='card-title'>Question One</h5><br><p class='card-text'><strong>Commonly used data types do not include:</strong></p><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>1. Booleans</button><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>2. Arrays</button><br><button class='btn btn-dark btn-lg' type='submit' id='correct' style='margin: 5px; color: white;'>3. Alerts</button><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>4. Strings</button></div>",
        
//     {
//         question: "Who created JavaScript?",
//         answers: {
//             A: "Douglas Crockford",
//             B: "Sheryl Sandberg",
//             C: "Brendan Eich"
//         },
//         correctAnswer: "C"
//     },
//     {
//         question: "Which one of these is a JavaScript package manager?",
//         answers: {
//           A: "Node.js",
//           B: "TypeScript",
//           C: "npm"
//         },
//         correctAnswer: "C"
//       },
//       {
//         question: "Which tool can you use to ensure code quality?",
//         answers: {
//           A: "Angular",
//           B: "jQuery",
//           C: "RequireJS",
//           D: "ESLint"
//         },
//         correctAnswer: "D"
//       }
// ];

// document.getElementById("card-display").addEventListener("click", )

// function clear() {
//     document.getElementById("card-display").innerHTML = "";
// }

// function questions() {
//     document.querySelector("#start")
//     document.getElementById("card-display").innerHTML = questionsList[0];
    // document.getElementById("card-display").innerHTML = "<div class='card-body ml-center'><h5 class='card-title'>Question One</h5><br><p class='card-text'><strong>Commonly used data types do not include:</strong></p><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>1. Booleans</button><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>2. Arrays</button><br><button class='btn btn-dark btn-lg' type='submit' id='correct' style='margin: 5px; color: white;'>3. Alerts</button><br><button class='btn btn-dark btn-lg' type='submit' id='incorrect' style='margin: 5px; color: white;'>4. Strings</button></div>";
//     for (var i = 0; i < questionsList.length; i++) {

//     }
// }

// var correctAnswer = document.querySelector("#correct")
// var incorrectAnswer = document.querySelector("#incorrect")

// correctAnswer.addEventListener("click",nextQuestion);
// incorrectAnswer.addEventListener("click",nextQuestion);

// function nextQuestion(event){
//     if(event.target.matches("correct")){
//       document.getElementById("card-display").innerHTML = questionsList[1];
//       var correct = document.createElement("div")
//         correct.innerHTML = "<div><hr><p>Correct!</div>"
//         document.appendChild(correct)
//     }
//       else if(event.target.matches("incorrect")){
//         document.getElementById("card-display").innerHTML = questionsList[1];
//         var correct = document.createElement("div")
//             correct.innerHTML = "<div><hr><p>Incorrect!</div>"
//             document.appendChild(incorrect)
//     }
//   }
