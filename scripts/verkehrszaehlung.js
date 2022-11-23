function submit() {
    document.querySelectorAll('input[type=radio]').forEach(answer => {
        answer.disabled = true;
    });

    const datasets = [
        [document.querySelector('input[name="q1"]:checked'), "q1a3", document.getElementById("result1")],
        [document.querySelector('input[name="q2"]:checked'), "q2a2", document.getElementById("result2")],
        [document.querySelector('input[name="q3"]:checked'), "q3a3", document.getElementById("result3")],
        [document.querySelector('input[name="q4"]:checked'), "q4a2", document.getElementById("result4")]
    ]

    let correct = 0;
    for(let i = 0; i < datasets.length; i++) {
        dataset = datasets[i];
        document.getElementById(dataset[1]).nextElementSibling.style.color = "green";

        if(dataset[0] === null) {
            continue;
        }

        if(dataset[0].id === dataset[1]) {
            dataset[2].innerHTML = "RICHTIG";
            dataset[2].style.color = "green";
            correct++;
        } else {
            dataset[2].innerHTML = "FALSCH";
            dataset[2].style.color = "red";
            dataset[0].nextElementSibling.style.color = "red";
        }
    }

    const result = document.getElementById("result");
    if(correct === 1) {
        result.innerHTML = "Sie haben 1 Frage richtig beantwortet!";
    } else {
        result.innerHTML = "Sie haben " + correct + " Fragen richtig beantwortet!";
    }
    result.style.border = "3px solid black";

    document.getElementById("button").innerHTML = "Weiter";
    document.getElementById("button").onclick = next;

    window.scrollTo(0, 0);
}

function next() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("infos").style.display = "";
}