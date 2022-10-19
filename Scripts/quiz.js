var correct = 3;
var number = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function submit(i) {
    let list = document.getElementsByClassName("grid-item");
    for (let item of list) {
        if (item.id === i.toString()) {
            item.style.setProperty("border", "solid aqua 3px");
        }
        if (item.id === correct.toString()) {
            item.style.setProperty("background-color", "green");
        }
        else {
            item.style.setProperty("background-color", "red");
        }
    }
    document.getElementById("next").style.setProperty("visibility", "visible");


}
function next() {
    window.number = window.number + 1
    resetStyle();
    newQuestion();
}
function resetStyle() {
    document.getElementById("next").style.setProperty("visibility", "hidden");
    let list = document.getElementsByClassName("grid-item");
    for (let item of list) {
        item.style.setProperty("border", "solid black 1px");
        item.style.setProperty("background-color", "white");
        item.style.setProperty("background-color", "white");
    }
}
function newQuestion() {
    let buttons = document.getElementsByClassName("quiz-button");
    console.log(buttons.length);
    for (let button of buttons) {
        button.innerText = "new" + number.toString();
    }
    window.correct = getRandomInt(3)
}


