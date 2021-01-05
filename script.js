const question = document.getElementById('question')
const answerA = document.getElementById('answer1');
const answerB = document.getElementById('answer2');
const answerC = document.getElementById('answer3');
const answerD = document.getElementById('answer4');
const ansList = document.getElementById('ansDivList')
let timeScore = 11;
let timer = document.getElementById('timer')

function addGlobalEventListner(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
};

function questionChange1() {
    question.innerHTML = "2. Which is an example of an id selector in CSS?";
    answerA.setAttribute("class", "a2 right");
    answerA.innerHTML = "#answer";
    answerB.setAttribute("class", "b2 wrong");
    answerB.innerHTML = ".answer";
    answerC.setAttribute("class", "c2");
    answerC.innerHTML = "answer";
    answerD.setAttribute("class", "d2");
    answerD.innerHTML = "'answer'";
};

function questionChange2() {
    question.innerHTML = "3. What keyword declares a variable in JavaScript?";
    answerA.setAttribute("class", "a3 wrong");
    answerA.innerHTML = "var";
    answerB.setAttribute("class", "b3");
    answerB.innerHTML = "let";
    answerC.setAttribute("class", "c3");
    answerC.innerHTML = "const";
    answerD.setAttribute("class", "d3 right");
    answerD.innerHTML = "all of the above";
};

function questionChange3() {
    question.innerHTML = "4. Which of the following is NOT a primitive data type?";
    answerA.setAttribute("class", "a4");
    answerA.innerHTML = "boolean";
    answerB.setAttribute("class", "b4");
    answerB.innerHTML = "number";
    answerC.setAttribute("class", "c4 right");
    answerC.innerHTML = "array";
    answerD.setAttribute("class", "d4 wrong");
    answerD.innerHTML = "string";
};

function printScore() {
    let userInit = prompt("Enter your initials")
    question.innerHTML = "Scoreboard";
    ansList.innerHTML = "";
    localStorage.setItem(userInit, timeScore);
    for (const key in localStorage) {
        ansList.prepend(`<div>${key}: ${localStorage.getItem(key)}</div>`) 
    };
}

function correctAnswer() {
    timeScore += 2;
};

function incorrectAnswer() {
    timeScore -= 2;
};

function setTime() {
    var timerInterval = setInterval(function() {
      timeScore--;
      timer.innerHTML = timeScore;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage("Time's Up!!");
        printScore();
      }
  
    }, 1000);
  };

  setTime
//correct and incorrect listeners

addGlobalEventListner('click', 'right', correctAnswer);
addGlobalEventListner('click', 'wrong', incorrectAnswer);

//first set of answer listeners

addGlobalEventListner("click", ".a1", questionChange1);
addGlobalEventListner("click", ".b1", questionChange1);
addGlobalEventListner("click", ".b1", correctAnswer);
addGlobalEventListner("click", ".c1", questionChange1);
addGlobalEventListner("click", ".d1", questionChange1);

//second set of answer listeners

addGlobalEventListner("click", ".a2", questionChange2);
addGlobalEventListner("click", ".b2", questionChange2);
addGlobalEventListner("click", ".a2", correctAnswer);
addGlobalEventListner("click", ".c2", questionChange2);
addGlobalEventListner("click", ".d2", questionChange2);

//third set of answer listeners

addGlobalEventListner("click", ".a3", questionChange3);
addGlobalEventListner("click", ".b3", questionChange3);
addGlobalEventListner("click", ".d3", correctAnswer);
addGlobalEventListner("click", ".c3", questionChange3);
addGlobalEventListner("click", ".d3", questionChange3);

//fourth set of answer listeners

addGlobalEventListner("click", ".a4", printScore);
addGlobalEventListner("click", ".b4", printScore);
addGlobalEventListner("click", ".c4", correctAnswer);
addGlobalEventListner("click", ".c4", printScore);
addGlobalEventListner("click", ".d4", printScore);