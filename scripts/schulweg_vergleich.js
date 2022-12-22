var winter_selected = false

function change() {
    let auto = document.getElementById("Auto")
    let eAuto = document.getElementById("E-Auto")
    let motorrad = document.getElementById("Motorrad")
    let fahrrad = document.getElementById("Fahrrad")
    let opnv = document.getElementById("OPNV")
    let sonstiges = document.getElementById("Sonstiges")

    let caption = document.getElementById("caption")

    let factor = "2"
    if(winter_selected) {
        caption.innerHTML = "Sommer"
        // document.getElementById("bar-diagram").src = "../assets/images/sommer.png"
        auto.style.height = "calc("+factor+" *4%)"
        auto.getElementsByTagName("span").item(0).innerHTML = "4"
        eAuto.style.height = "0"
        eAuto.getElementsByTagName("span").item(0).innerHTML = "0"
        motorrad.style.height = "calc("+factor+" *4%)"
        motorrad.getElementsByTagName("span").item(0).innerHTML = "4"
        fahrrad.style.height = "calc("+factor+" *39%)"
        fahrrad.getElementsByTagName("span").item(0).innerHTML = "39"
        opnv.style.height = "calc("+factor+" *10%)"
        opnv.getElementsByTagName("span").item(0).innerHTML = "10"
        sonstiges.style.height = "calc("+factor+" *5%)"
        sonstiges.getElementsByTagName("span").item(0).innerHTML = "5"
        winter_selected = false
    }
    else {
        caption.innerHTML = "Winter"
        // document.getElementById("bar-diagram").src = "../assets/images/winter.png"
        auto.style.height = "calc("+factor+" *13%)"
        auto.getElementsByTagName("span").item(0).innerHTML = "13"
        eAuto.style.height = "calc("+factor+" *1%)"
        eAuto.getElementsByTagName("span").item(0).innerHTML = "1"
        motorrad.style.height = "calc("+factor+" *1%)"
        motorrad.getElementsByTagName("span").item(0).innerHTML = "1"
        fahrrad.style.height = "calc("+factor+" *17%)"
        fahrrad.getElementsByTagName("span").item(0).innerHTML = "17"
        opnv.style.height = "calc("+factor+" *28%)"
        opnv.getElementsByTagName("span").item(0).innerHTML = "28"
        sonstiges.style.height = "calc("+factor+" *4%)"
        sonstiges.getElementsByTagName("span").item(0).innerHTML = "4"
        winter_selected = true
    }

}