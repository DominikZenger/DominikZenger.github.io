var correct = 3;
var number = 0;
var pending = true;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function submit(i) {
    if (!window.pending) {
        return
    }
    let list = document.getElementsByClassName("quiz-button");
    for (let item of list) {

        if (item.parentElement.id === correct.toString()) { //correct
            item.style.setProperty("background-color", "#26890c");
        }
        else if (item.parentElement.id === i.toString()){ //wrong
            item.style.setProperty("background-color", "#c60929");

        }
    }
    document.getElementById("next").style.setProperty("visibility", "visible");
    window.pending = false;

}
function next() {
    window.number = window.number + 1;
    resetStyle();
    newQuestion();
    window.pending = true;
}
function resetStyle() {
    document.getElementById("next").style.setProperty("visibility", "hidden");
    let list = document.getElementsByClassName("quiz-button");
    for (let item of list) {
        item.style.setProperty("background-color", "#f0f0f0");
        item.style.setProperty("background-color", "#f0f0f0");
    }
}
function newQuestion() {
    let buttons = document.getElementsByClassName("quiz-button");
    console.log(buttons.length);
    for (let button of buttons) {
        button.innerText = "new" + number.toString();
    }
    window.correct = getRandomInt(3);
}


