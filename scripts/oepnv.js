const icons = [
    [document.getElementById("icon_map"), "../assets/icons/map_w.svg", "../assets/icons/map_b.svg"],
    [document.getElementById("icon_oepnv"), "../assets/icons/oepnv_w.svg", "../assets/icons/oepnv_b.svg"],
    [document.getElementById("icon_car"), "../assets/icons/car_w.svg", "../assets/icons/car_b.svg"],
    [document.getElementById("icon_bicycle"), "../assets/icons/bicycle_w.svg", "../assets/icons/bicycle_b.svg"]
]

select(0)

function select(n) {
    overlay = document.getElementById("overlay");

    allWhite();
    icons[n][0].src = icons[n][2];

    switch(n) {
        case 0: 
            overlay.src = "";
            break;
        case 1:
            overlay.src = "../assets/images/map_oepnv.png";
            break;
        case 2:
            overlay.src = "../assets/images/map_car.png";
            break;
        case 3:
            overlay.src = "../assets/images/map_bicycle.png";
            break;
    }
}

function allWhite() {
    icons.forEach(icon => {
        icon[0].src = icon[1];
    });
}

