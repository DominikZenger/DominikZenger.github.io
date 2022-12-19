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
        document.getElementById(dataset[1]).nextElementSibling.style.color = "#006100";

        if(dataset[0] === null) {
            continue;
        }

        if(dataset[0].id === dataset[1]) {
            dataset[2].innerHTML = "RICHTIG";
            dataset[2].style.color = "#006100";
            correct++;
        } else {
            dataset[2].innerHTML = "FALSCH";
            dataset[2].style.color = "#9C0006";
            dataset[0].nextElementSibling.style.color = "#9C0006";
        }
    }

    const result = document.getElementById("result");
    if(correct === 1) {
        result.innerHTML = "Sie haben 1 Frage richtig beantwortet!";
    } else {
        result.innerHTML = "Sie haben " + correct + " Fragen richtig beantwortet!";
    }
    result.style.border = "3px solid black";
    result.style.padding = "1.5vmin 0";

    switch(correct) {
        case 0:
            result.style.backgroundColor = "#F0BBC2";
            result.style.color = "#9C0006";
            result.style.borderColor = "#9C0006";
            break;
        case 1:
        case 2:
        case 3:
        case 4:
            result.style.backgroundColor = "#C1E9C9";
            result.style.color = "#006100";
            result.style.borderColor = "#006100";
            break;
    }

    document.getElementById("button").innerHTML = "Weiter";
    document.getElementById("button").onclick = next;

    window.scrollTo(0, 0);
}

function next() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("infos").style.display = "";
}

function scroll_to_question(question) {
    scrollTo({
        top: document.getElementById('quiz'.concat(question)).getBoundingClientRect().top + window.scrollY  - (screen.width < 750 ? 150 : 80),
        left: 0,
        behavior: 'smooth'
    })
}