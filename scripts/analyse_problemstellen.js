var currentlyClicked = -1;

let selectedGridItem = 0


function selectArea(id) {
    allCirclesRed();
    allInfosInvisible();
    
    if(currentlyClicked === id) {
        currentlyClicked = -1;
        return;
    }
    currentlyClicked = id;

    const name = document.getElementById("name");
    const infos = document.getElementById("infos").children;
    const circles = document.getElementsByClassName("circle");
    const description = document.getElementById("description");

    circles[id].style.backgroundColor = "blue";
    setVisible(infos[id], true);
    setVisible(name, true);
    setVisible(document.getElementById("base-infos"), true);
    let container;
    switch(id) {
        case 0: 
            name.innerHTML = "Feldkirchner-Kreuzung";
            description.innerHTML = Feldkirchner_Kreuzung_description;
            container = document.getElementById("grid1");
            if (!container.lastElementChild) {
                createGrid(colorGridFeldkirchenerKreuzung, container);
                select(selectedGridItem);
            }
            window.scrollTo(0, 1000);
            break;
        case 1:
            name.innerHTML = "Kreuzung Ammerthalstraße und Feldkirchner Straße";
            description.innerHTML = Ammerthalstrasse_description;
            container = document.getElementById("grid2");
            if (!container.lastElementChild) {
                createGrid(colorGridAmmerthal, container);
                select(selectedGridItem);
            }
            window.scrollTo(0, 1000);
            break;
        case 2: 
            name.innerHTML = "Kirchheimer-Ei";
            description.innerHTML = Kirchheimer_Ei_description;
            container = document.getElementById("grid3");
            if (!container.lastElementChild) {
                createGrid(colorGridEi, container);
                select(selectedGridItem);
            }
            window.scrollTo(0, 1000);
            break;
        case 3: 
            name.innerHTML = "Kirchheimer-Kreuzung";
            description.innerHTML = Kirchheimer_Kreuzung_description;
            container = document.getElementById("grid4");
            if (!container.lastElementChild) {
                createGrid(colorGridKirchheimerKreuzung, container);
                select(selectedGridItem);
            }
            window.scrollTo(0, 1000);
            break;
        case 4: 
            name.innerHTML = "Florianstraße";
            description.innerHTML = Florianstrasse_description
            container = document.getElementById("grid5");
            if (!container.lastElementChild) {
                createGrid(colorGridflorianStrasse, container);
                select(selectedGridItem);
            }
            window.scrollTo(0, 1000);
            break;
    }
}

function allInfosInvisible() {
    setVisible(document.getElementById("name"), false);
    setVisible(document.getElementById("base-infos"), false);
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

const green = "#92D050"
const yellow = "#F9DC05"
const darkorange = "#FA8504"
const brightorange = "#F9BB00"
const red = "#FF0000"

let colorGridFeldkirchenerKreuzung = [
    ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
    ["#C1C1C1", green, yellow, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, yellow, green, green, green, yellow],
    ["#FFFFFF", green, yellow, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, green, brightorange, yellow, green],
    ["#C1C1C1", green, yellow, brightorange, yellow, green, brightorange, brightorange, brightorange, brightorange, darkorange, brightorange, brightorange, brightorange, brightorange, yellow, green, green],
    ["#FFFFFF", brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, darkorange, darkorange, brightorange, brightorange, brightorange, yellow],
    ["#C1C1C1", green, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, darkorange, darkorange, brightorange, darkorange, brightorange, brightorange, yellow, green, green],
    ["#FFFFFF", green, yellow, brightorange, yellow, green, brightorange, brightorange, brightorange, brightorange, green, green, green, green, green, green, green, green],
    ["#C1C1C1", green, green, yellow, yellow, green, brightorange, green, brightorange, brightorange, brightorange, green, green, green, green, green, green, green]
]
let colorGridAmmerthal = [
    ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
    ["#C1C1C1", darkorange, brightorange, brightorange, yellow, yellow, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, yellow, yellow, yellow, brightorange, yellow, yellow, yellow],
    ["#FFFFFF", darkorange, yellow, yellow, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, yellow, green, yellow, yellow, yellow, yellow, brightorange],
    ["#C1C1C1", darkorange, brightorange, yellow, brightorange, brightorange, brightorange, yellow, brightorange, brightorange, brightorange, brightorange, yellow, green, yellow, yellow, yellow, green],
    ["#FFFFFF", brightorange, yellow, yellow, brightorange, brightorange, brightorange, brightorange, brightorange, darkorange, brightorange, brightorange, brightorange, yellow, yellow, yellow, green, yellow],
    ["#C1C1C1", darkorange, brightorange, yellow, yellow, brightorange, brightorange, brightorange, yellow, brightorange, brightorange, yellow, yellow, yellow, yellow, green, green, green],
    ["#FFFFFF", green, brightorange, yellow, yellow, green, brightorange, yellow, brightorange, brightorange, brightorange, yellow, yellow, green, green, yellow, yellow, green],
    ["#C1C1C1", green, green, green, green, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, yellow, green, yellow, green, green, green, green]
]
let colorGridflorianStrasse = [
    ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
    ["#C1C1C1", yellow, yellow, brightorange, brightorange, brightorange, brightorange, darkorange, brightorange, brightorange, brightorange, yellow, darkorange, brightorange, brightorange, darkorange, red, darkorange],
    ["#FFFFFF", brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, darkorange, darkorange, brightorange, brightorange, yellow, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange],
    ["#C1C1C1", brightorange, brightorange, darkorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, darkorange, brightorange, brightorange, darkorange],
    ["#FFFFFF", yellow, yellow, brightorange, brightorange, brightorange, brightorange, darkorange, darkorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, green, brightorange],
    ["#C1C1C1", darkorange, brightorange, yellow, brightorange, darkorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, darkorange, brightorange, brightorange],
    ["#FFFFFF", brightorange, yellow, yellow, brightorange, darkorange, brightorange, brightorange, darkorange, darkorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, darkorange],
    ["#C1C1C1", yellow, yellow, darkorange, brightorange, brightorange, yellow, darkorange, darkorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, darkorange, darkorange, yellow]
]
let colorGridEi = [
    ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
    ["#C1C1C1", green, brightorange, red, brightorange, brightorange, brightorange, green, green, brightorange, brightorange, brightorange, red, brightorange, brightorange, green, green, green],
    ["#FFFFFF", green, brightorange, red, brightorange, green, green, brightorange, brightorange, brightorange, brightorange, brightorange, red, brightorange, brightorange, green, green, green],
    ["#C1C1C1", green, brightorange, brightorange, brightorange, brightorange, green, brightorange, brightorange, brightorange, brightorange, brightorange, red, brightorange, green, green, green, green],
    ["#FFFFFF", green, brightorange, red, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, red, red, red, green, green, green, green],
    ["#C1C1C1", brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, green, green, green, green],
    ["#FFFFFF", green, brightorange, green, green, green, green, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, green, green, green, green],
    ["#C1C1C1", green, green, green, green, green, green, green, green, green, brightorange, brightorange, green, green, green, green, green, green]
]
let colorGridKirchheimerKreuzung = [
    ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
    ["#C1C1C1", green, brightorange, yellow, yellow, brightorange, brightorange, darkorange, brightorange, brightorange, brightorange, yellow, brightorange, green, green, brightorange, green, green],
    ["#FFFFFF", green, green, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, darkorange, brightorange, brightorange, yellow, brightorange, green, brightorange, green],
    ["#C1C1C1", yellow, yellow, brightorange, brightorange, brightorange, yellow, darkorange, yellow, brightorange, brightorange, brightorange, brightorange, yellow, green, darkorange, green, green],
    ["#FFFFFF", yellow, yellow, brightorange, yellow, darkorange, brightorange, darkorange, brightorange, brightorange, brightorange, brightorange, brightorange, brightorange, yellow, brightorange, yellow, green],
    ["#C1C1C1", brightorange, yellow, brightorange, brightorange, darkorange, brightorange, darkorange, brightorange, brightorange, brightorange, brightorange, yellow, yellow, brightorange, green, green, green],
    ["#FFFFFF", green, yellow, brightorange, green, brightorange, brightorange, yellow, yellow, yellow, yellow, yellow, yellow, green, green, green, green, green],
    ["#C1C1C1", green, green, yellow, green, yellow, brightorange, darkorange, brightorange, brightorange, brightorange, yellow, yellow, green, yellow, yellow, yellow, green]
]
let textGrid = [
    ["Uhrzeit", 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    ["Montag"],
    ["Dienstag"],
    ["Mittwoch"],
    ["Donnerstag"],
    ["Freitag"],
    ["Samstag"],
    ["Sonntag"]
]

function createGrid(colorGrid, container) {
    for (let i = 0; i < 18*8; i++) {
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        gridItem.id = i.toString();
        gridItem.setAttribute('onclick','select(this.id)');
        var x = i % 18
        var y = Math.floor(i/18)
        if (y === 0) {
            gridItem.style.color = "white"
        }
        if(colorGrid[y][x] !== undefined) {
            gridItem.style.backgroundColor = colorGrid[y][x]
        }
        else {
            gridItem.style.backgroundColor = "white";
        }
        if(textGrid[y][x] !== undefined) {
            gridItem.innerHTML = textGrid[y][x];
        }
        else {
            gridItem.innerHTML = "";
        }
        container.appendChild(gridItem);
    }


}
function select(i) {
    selectedGridItem = i;
    const items = document.getElementsByClassName("grid-item");
    for (let r = 0; r < items.length; r++) {
        items.item(r).style.opacity = "1";
    }
    if (parseInt(i) === 0) {
        return
    }
    if (parseInt(i) === selectedGridItem) {
        return
    }
    const row = Math.floor(parseInt(i) / 18);
    const column = parseInt(i) % 18;
    for (let r = 0; r < items.length; r++) {
        if((Math.floor(parseInt(r) / 18) % 8 !== row) && ((parseInt(r) % 18) !== column)) {
            items.item(r).style.opacity = "0.5";
        }
    }

}




const Feldkirchner_Kreuzung_description = "Die Kreuzung in der Mitte der Gemeinde Feldkirchen ist von zentraler\n" +
    "Bedeutung für Einwohner und Pendler. Vor allem unter der Woche ist sie von\n" +
    "früh morgens ab 7 Uhr bis 20 Uhr abends konstant mittelstark ausgelastet. Am\n" +
    "Abend zum Berufsverkehr hin kommt es oftmals zu stockendem Verkehr und\n" +
    "gelegentlich zu kleinen Staus.\n" +
    "Anlässlich der allgemein hohen Zuwachsrate der Bevölkerung im näheren\n" +
    "Umkreis und dem einhergehenden stetigen Ausbau des ÖPNV mit neuen Bus-\n" +
    "verbindungen ist in näherer Zukunft eine Zuspitzung des Verkehrs an dieser\n" +
    "zentral gelegenen Kreuzung zu erwarten."

const Ammerthalstrasse_description = "Die Kreuzung in der Mitte der Gemeinde Feldkirchen ist von zentraler\n" +
    "Bedeutung für Einwohner und Pendler. Vor allem unter der Woche ist sie von\n" +
    "früh morgens ab 7 Uhr bis 20 Uhr abends konstant mittelstark ausgelastet. Am\n" +
    "Abend zum Berufsverkehr hin kommt es oftmals zu stockendem Verkehr und\n" +
    "gelegentlich zu kleinen Staus.\n" +
    "Anlässlich der allgemein hohen Zuwachsrate der Bevölkerung im näheren\n" +
    "Umkreis und dem einhergehenden stetigen Ausbau des ÖPNV mit neuen Bus-\n" +
    "verbindungen ist in näherer Zukunft eine Zuspitzung des Verkehrs an dieser\n" +
    "zentral gelegenen Kreuzung zu erwarten."

const Kirchheimer_Ei_description = "Das „Kirchheimer-Ei“ ist eine in der Gegend gut bekannte Bezeichnung für die\n" +
    "viel befahrene oval geformte ikonische Kreuzung der Staatsstraße-2082 und\n" +
    "dem Heimstettener-Moosweg. Sie steht schon seit vielen Jahren unter Kritik\n" +
    "und wurde schon einige Male umgebaut. Dies Veränderungen haben bisher\n" +
    "jedoch nicht viel an den teils chaotischen Zuständen verändert. Besonders am\n" +
    "Morgen gegen 8 Uhr und am Abend von 16 bis 18 Uhr bildet sich ein enormer\n" +
    "Rückstau an den beiden Kreuzungseinmündungen des Heimstettener-\n" +
    "Mooswegs. Dieser führt teils bis zu über 30 Minuten Zeitverlust und ist für die\n" +
    "Betroffenen nicht weiter hinnehmbar. Der Bau von neuen Wohnblocks in\n" +
    "direkter nähe zu der Kreuzung und die für 2024 geplante Landesgartenschau in\n" +
    "der Gemeinde Kirchheim könnten zu einem endgültigem Verkehrskollaps an\n" +
    "dieser Stelle führen."
const Florianstrasse_description = ""
const Kirchheimer_Kreuzung_description = ""

