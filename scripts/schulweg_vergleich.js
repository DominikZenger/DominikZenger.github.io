var winter = false

function change() {
    if(winter) {
        document.getElementById("bar-diagram").src = "../assets/images/sommer.png"
        winter = false
    }
    else {
        document.getElementById("bar-diagram").src = "../assets/images/winter.png"
        winter = true
    }

}