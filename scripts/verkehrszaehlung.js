let currentQuestion = 0;
let questions;

function next() {
    currentQuestion++;
    switch(currentQuestion) {
        case 1:
            setVisible(questions[0], false);
            setVisible(questions[1], true);
            break;
        case 2:
            setVisible(questions[1], false);
            setVisible(questions[2], true);
            break;
        case 3:
            setVisible(questions[2], false);
            setVisible(questions[3], true);
            break;
        case 4:
            setVisible(questions[3], false);
            document.getElementById("result").innerHTML = "Du hast " + countCorrect() + " Fragen richtig beantwortet!";
            setVisible(document.getElementById("infos"), true);
            showResults();
            break;
    }
}

function quizStart() {
    questions = [
        document.getElementById("quiz1"),
        document.getElementById("quiz2"),
        document.getElementById("quiz3"),
        document.getElementById("quiz4")
    ];
    
    setVisible(questions[1], false);
    setVisible(questions[2], false);
    setVisible(questions[3], false);
    
    setVisible(document.getElementById("infos"), false);
}

function countCorrect() {
    count = 0;
    document.getElementById("q1a4").checked ? count++ : null;
    document.getElementById("q2a3").checked ? count++ : null;
    document.getElementById("q3a4").checked ? count++ : null;
    document.getElementById("q4a3").checked ? count++ : null;
    return count;
}

function setVisible(element, visible) {
    element.style.display = visible ? "" : "none";
}