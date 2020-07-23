<<<<<<< HEAD
var currentQuestion=0;
var currentScore=0;
var currentTime=60
var questionContainer=document.getElementById("container");
var button = document.getElementById("start");
var countdownEl = document.getElementById("countdown");


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
        finishQuiz();
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
    
            var question=questionsList[currentQuestion];
            if(answerClick===question.answer){
                currentScore++;
                currentQuestion++;
            }
            else{
                currentTime-=5;
                alert("Incorrect! Minus 5 seconds");
                currentQuestion++
 
            }
    
            if(currentQuestion>=questionsList.length){
                clearInterval(clear);
                questionContainer.innerHTML="";
                finishQuiz();
            }

            else{
            showCurrentQuestion();
        }
        }
    });


    function finishQuiz(){
        countdown.innerHTML-"";
        var userName= prompt("What is your name?");
        if(currentHighScore || currentScore >= currentHighScore){
            
            localStorage.setItem("Score", currentScore);
            localStorage.setItem("Name", userName);
        }
    
            var scoreDisplay=document.createElement("h1")
            scoreDisplay.innerText=(userName + ": Your score is " + currentScore);
            
            questionContainer.appendChild(scoreDisplay);


           var currentHighScore = localStorage.getItem("Score")

           
           showHighScores();
           }
       
        
      
  

        function showHighScores() {

            var currentHighScore=localStorage.getItem("Score");
            var userName=localStorage.getItem("Name");


            if(currentHighScore && userName){
                var highScores=document.createElement("h4")
            highScores.innerText=("Highest Scores: " + userName + " " + currentHighScore );
            questionContainer.appendChild(highScores);
            }
        

            
=======
var currentQuestion=0;
var currentScore=0;
var currentTime=60
var questionContainer=document.getElementById("container");
var button = document.getElementById("start");
var countdownEl = document.getElementById("countdown");


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
        finishQuiz();
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
    
            var question=questionsList[currentQuestion];
            if(answerClick===question.answer){
                currentScore++;
                currentQuestion++;
            }
            else{
                currentTime-=5;
                alert("Incorrect! Minus 5 seconds");
                currentQuestion++
 
            }
    
            if(currentQuestion>=questionsList.length){
                clearInterval(clear);
                questionContainer.innerHTML="";
                finishQuiz();
            }

            else{
            showCurrentQuestion();
        }
        }
    });


    function finishQuiz(){
        countdown.innerHTML-"";
        
        var name=prompt("What is your name?");

            var scoreDisplay=document.createElement("h1")
            scoreDisplay.innerText=(name + ": Your score is: " + currentScore);
            
            questionContainer.appendChild(scoreDisplay);

            localStorage.setItem("Score", currentScore);
           var currentHighScore = localStorage.getItem("Score")

           if(currentScore > currentHighScore){
               localStorage.setItem("Score", currentScore)
           }
           }
       
        
      
  

        function showHighScores() {
            //retrieve high scores
            //display high scores
>>>>>>> c8bfef9a3f031d5137aae16be774b547ec61cffd
        }