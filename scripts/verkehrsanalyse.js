var currentlyClicked = -1;

function selectArea(id) {
    allCirclesRed();
    allInfosInvisible();
    
    if(currentlyClicked == id) {
        currentlyClicked = -1;
        return;
    }
    currentlyClicked = id;

    let name = document.getElementById("name");
    let infos = document.getElementById("infos").children;
    let circles = document.getElementsByClassName("circle");

    circles[id].style.backgroundColor = "blue";
    setVisible(infos[id], true); 
    setVisible(name, true);

    switch(id) {
        case 0: 
            name.innerHTML = "Feldkirchner-Kreuzung";
            break;
        case 1: 
            name.innerHTML = "Kreuzung Ammerthalstraße und Feldkirchner Straße";
            break;
        case 2: 
            name.innerHTML = "Kirchheimer-Ei";
            break;
        case 3: 
            name.innerHTML = "Kirchheimer-Kreuzung";
            break;
        case 4: 
            name.innerHTML = "Florianstraße";
            break;
    }
}

function allInfosInvisible() {
    setVisible(document.getElementById("name"), false);
    let infos = document.getElementById("infos").children;
    for(var i = 0; i < infos.length; i++) {
        setVisible(infos[i], false);
    }
}

function setVisible(element, b) {
    element.style.display = b ? "block" : "none";
}

function allCirclesRed() {
    let circles = document.getElementsByClassName("circle");
    for(var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = "red";
    }
}