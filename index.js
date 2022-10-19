window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false)

function waterClicked() {
    var water = document.getElementById("water");
    water.style.height = (water.style.height == "80px") ? "0px" : "80px";
}