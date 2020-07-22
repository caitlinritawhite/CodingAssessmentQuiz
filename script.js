var currentQuestion=0;
var currentScore=0;
var currentTime=60
var questionContainer=document.getElementById("container");
var button = document.getElementById("start")
var countdown = document.getElementById("countdown")

button.addEventListener("click", function (event){
    event.stopPropagation();
    document.getElementById("start").style.display = "none";
    document.getElementById("firstPage").style.display = "none";
    clear = setInterval(updateCountdown, 1000),
   showCurrentQuestion();
})

function updateCountdown(event){
    currentTime--;
    countdown.innerHTML = ("Time Remaining: " + currentTime);

    if(currentTime == 0){
        alert("Time is up!");
        clearInterval(clear);
        finishQuiz()
    }
}

var questionsList = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["Strings", "Alerts", "Booleans", "Buttons"],
        answer:"Buttons",
    },
    {
        question: "The condition of an 'if' / 'else' statement is enclosed within:",
        options: ["Quotes", "Curly Braces", "Parenthesis", "Square Brackets"],
        answer:"Curly Braces",
    },
    {
        question: "Arrays in Javascript can be used to store:",
        options: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
        answer:"All of the above",
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables:",
        options: ["Commas", "Curly Braces", "Quotes", "Arrays"],
        answer:"Quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "Terminal/Bash", "For Loops", "Console Log"],
        answer:"Console Log",
    }
    ];

    function showCurrentQuestion() {
        var question=questionsList[currentQuestion];
        questionContainer.innerHTML="";
    
        var questionTitle=document.createElement("h1");
        questionTitle.innerText=question.question;
        questionContainer.appendChild(questionTitle);
    
        var optionsList=document.createElement("ul");
    
        for(var i=0; i<question.options.length; i++){
            var questionLi=document.createElement("li");
            questionLi.innerText=question.options[i];
            optionsList.appendChild(questionLi);
        }
    
    
    questionContainer.appendChild(optionsList);
    }

questionContainer.addEventListener("click", function(event){
        if(event.target.matches("li")) {
            var answerClick=event.target.innerText;
    
            var question=questionsList[currentQuestion]
            if(answerClick===question.answer){
                currentScore++;
                currentQuestion++;
            }
            else{
                currentTime-=5;
                alert("Incorrect! Minus 5 seconds");
            }
    
            if(currentQuestion>=questionsList.length){
                finishQuiz()
            }
            else{
            currentQuestion++;
            showCurrentQuestion();
        }
        }
    });

    function finishQuiz(){
        if(currentTime === 0){
            clearInterval(interval);
            var scoreDisplay=document.createElement("h1")
            scoreDisplay.innerText=("Here is your score!" + currentScore)
            
            //display score
            //store in the high scores if higher than previous score
        }};

        function showHighScores() {
            //retrieve high scores
            //display high scores
        }