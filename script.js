// Variables //

var optionOne = document.getElementById("answerOne");
var optionTwo = document.getElementById("answerTwo");
var optionThree = document.getElementById("answerThree");
var counter = document.getElementById("counter");
var scoreDiv = document.getElementById("scoreContainer");
var questionIndex = 0;
var count = 0;
var score = 0;

// Quiz questions display //

var questionsList = [
    {
        question: "Which is not a data type in JavaScript?",
        optionA: "Alert",
        optionB: "Boolean",
        optionC: "String",
        correct: "optionA"
    },
    {
        question: "Who created JavaScript?",
        optionA: "Sheryl Sandberg",
        optionB: "Brendan Eich",
        optionC: "Douglas Crockford",
        correct: "optionB"
    },
    {
        question: "Which syntax belongs to JavaScript?",
        optionA: ".className { color: red; }",
        optionB: "document.getElementById()",
        optionC: "<p>This is text</p>",
        correct: "optionB"
    },
    {
        question: "Where can you find <script> tags in an HTML file?",
        optionA: "<body>",
        optionB: "<head>",
        optionC: "Both",
        correct: "optionC"
        // changed innerHTML into textContent and all tags showed up. oops.
    },
    {
        question: "If a variable is defined globally in JavaScript, where can it be used?",
        optionA: "Only in child functions",
        optionB: "Anywhere",
        optionC: "Variables cannot be defined globally",
        correct: "optionB"

        // changing correct's from "correct: X" to "correct: optionX" inverted problem, now all answers are correct instead of incorrect //
    }
];

console.log(questionsList)

// timer content //

var start = document.getElementById("start");

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = minutes + ":" + seconds;

        if (--timer === 0) {
            display = 0
            alert("Times Up!")
            clear()
            GameOver()
        }
    }, 1000);
}

start.addEventListener("click", begin);

function begin() {
    var twoMinutes = 60 * 1,
        display = document.querySelector("#time");
    startTimer(twoMinutes, display);
        document.getElementById("startBox").innerHTML = "";
        showQuestion()
};

// question controls //

var lastQuestion = questionsList.length;

function clear() {
    document.getElementById("card-display").innerHTML = "";
}

function GameOver() {
        document.getElementById("card-display").innerHTML = "<br><br><br><br><br><h1><strong>GAME OVER</strong></h1><br><br><br><br><br><button type='submit' id='next'>Go to Scoreboard</button>"

// this following var/eventlistener causes the leaderboard/gameover bug //

        var next = document.getElementById("next");
            next.addEventListener("submit", leaderboard())
}

// leaderboard and local storage //

function leaderboard() {
        document.getElementById("card-display").innerHTML = "<br><br><br><br><br><form id='leaderboard' method='POST'><label for='list-text'>Enter Name Here</label><input type='text' placeholder='Tony Stark' name='list-text' id='list-text' /></form><ul id='name-list'></ul>"
    
    var todos = [];
    var todoInput = document.querySelector("#list-text");
    var todoForm = document.querySelector("#leaderboard");
    var todoList = document.querySelector("#name-list");

    init();

    function renderTodos() {
        todoList.innerHTML = "";
        todoCountSpan.innerHTML = todos.length;

    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];

        var li = document.createElement("li");
            li.innerHTML = todo;
            li.setAttribute("data-index", i);

        todoList.appendChild(li);
        }
    }

    function init() {
        var storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos !== null) {
            todos = storedTodos;
        }

        renderTodos();
    }
    function storeTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
    }
    todoForm.addEventListener("submit", function(event) {
        event.preventDefault();
  
        var todoText = todoInput.value.trim();
    if (todoText === "") {
        return;
    }
        todos.push(todoText);
        todoInput.value = "";
    storeTodos();
    renderTodos();
    });
}


function showQuestion(){
   
        document.getElementById("question-text").textContent = questionsList[questionIndex].question;
        document.getElementById("answerOne").textContent = questionsList[questionIndex].optionA;
        document.getElementById("answerTwo").textContent = questionsList[questionIndex].optionB;
        document.getElementById("answerThree").textContent = questionsList[questionIndex].optionC;
    
};

optionOne.addEventListener("click", factCheck)
optionTwo.addEventListener("click", factCheck)
optionThree.addEventListener("click", factCheck)

console.log(questionIndex)
console.log(count)
console.log(score)

// question box visibility //

start.onclick = () => {
    var vis = document.querySelector("#questionBox");
    if (vis.classList.contains("visibility")) {
      vis.classList.remove("visibility");
  
    }
}

  // scorekeeper //

function factCheck() {
    var correct = questionsList[questionIndex].correct
    if( correct == questionsList[questionIndex].correct){
        score++;
        correctAnswer();
        questionIndex++;
        
    }
    else{
        questionIndex++;
        incorrectAnswer();
        
    }
    count = 0;
    if(questionIndex < lastQuestion){
        showQuestion();
    }
    else{
        GameOver();
    }
}

// alerts for correct/incorrect //

function correctAnswer(){
    document.getElementById("outcome").innerHTML = "<h2>Correct!</h2>";
    document.getElementById("audio").innerHTML= "<embed src='/Assets/sfx/correct.wav' hidden='true' autostart='true' loop='false' />";
}

function incorrectAnswer(){
    document.getElementById("outcome").innerHTML = "<h2>Incorrect!</h2>";
    document.getElementById("audio").innerHTML= "<embed src='/Assets/sfx/incorrect.wav' hidden='true' autostart='true' loop='false' />";
}







// FOR SAFE KEEPING - MAY BE USEFUL LATER ////////////////////////////////////////////////////////

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
