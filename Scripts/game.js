function init() {
    var character = document.getElementById("character");
    var block = document.getElementById("block");
}

function jump() {
    if(!character.classList.contains("animate")){  
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500)
}

var checkDead = setInterval(function(){
    var charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<40 && blockLeft>20 && charTop>=130) {
        document.getElementById("lost").innerHTML = "You Lost!"
        block.style.animation = "none";
        block.style.display = "none";
    }
}, 10)