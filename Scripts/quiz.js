// Muss für mehr Fragen umgeschrieben werden!
function submit() {
    try {
        input = document.querySelector('input[name="f1"]:checked').value;

        var soundCorrect = new Audio("../Sounds/correct.mp3");
        var soundWrong = new Audio("../Sounds/wrong.mp3");

        switch(input) {
            case "a1": 
                document.getElementById("f1a1").style.color = "red";
                document.getElementById("f1a3").style.color = "green";
                soundWrong.play();
                break;
            case "a2": 
                document.getElementById("f1a2").style.color = "red";
                document.getElementById("f1a3").style.color = "green";
                soundWrong.play();
                break;
            case "a3": 
                document.getElementById("f1a3").style.color = "green";
                soundCorrect.play();
                break;
            case "a4": 
                document.getElementById("f1a4").style.color = "red";
                document.getElementById("f1a3").style.color = "green";
                soundWrong.play();
                break;
        }

        button = document.getElementById("button");
        button.firstChild.data = "Weiter";
        button.onclick = () => next();
    } catch (ignored) {}
}

function next() {
    document.getElementById("f1a1").style.color = "black";
    document.getElementById("f1a2").style.color = "black";
    document.getElementById("f1a3").style.color = "black";
    document.getElementById("f1a4").style.color = "black";
    
    alert("Nächste Frage!");
    button.firstChild.data = "Überprüfen";
    button.onclick = () => submit();
}