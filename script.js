const question = document.getElementById('question')
const answerA = document.getElementById('answer1');
const answerB = document.getElementById('answer2');
const answerC = document.getElementById('answer3');
const answerD = document.getElementById('answer4');

function addGlobalEventListner(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
};

function questionChange1() {
    question.innerHTML = "2. Which is an example of an id selector in CSS?";
    answerA.setAttribute("class", "a2");
    answerA.innerHTML = "#answer";
    answerB.setAttribute("class", "b2");
    answerB.innerHTML = ".answer";
    answerC.setAttribute("class", "c2");
    answerC.innerHTML = "answer";
    answerD.setAttribute("class", "d2");
    answerD.innerHTML = "'answer'";
};

function questionChange2() {
    question.innerHTML = "3. What keyword declares a variable in JavaScript?";
    answerA.setAttribute("class", "a3");
    answerA.innerHTML = "var";
    answerB.setAttribute("class", "b3");
    answerB.innerHTML = "let";
    answerC.setAttribute("class", "c3");
    answerC.innerHTML = "const";
    answerD.setAttribute("class", "d3");
    answerD.innerHTML = "all of the above";
};

function questionChange3() {
    question.innerHTML = "4. Which of the following is NOT a primitive data type?";
    answerA.setAttribute("class", "a4");
    answerA.innerHTML = "boolean";
    answerB.setAttribute("class", "b4");
    answerB.innerHTML = "number";
    answerC.setAttribute("class", "c4");
    answerC.innerHTML = "array";
    answerD.setAttribute("class", "d4");
    answerD.innerHTML = "string";
};



