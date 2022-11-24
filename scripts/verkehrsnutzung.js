function select(i) {
    let table = document.getElementsByClassName("bar")
    for (let tableElement of table) {
        tableElement.style.height = "1%"
    }

    for (let i=0; i<=100; i++) {
        for (let tableElement of table) {
            tableElement.style.height = i.toString() + "%"
        }

    }
}


