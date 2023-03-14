function playKeySound(keyPressed){
    var audio;
        switch (keyPressed) {
            case "w":
                audio = new Audio("sounds/tom-1.mp3");
                break;
            case "a":
                audio = new Audio("sounds/tom-2.mp3");
                break;
            case "s":
                audio = new Audio("sounds/tom-3.mp3");
                break;
            case "d":
                audio = new Audio("sounds/tom-4.mp3");
                break;
            case "j":
                audio = new Audio("sounds/snare.mp3");
                break;
            case "k":
                audio = new Audio("sounds/crash.mp3");
                break;
            case "l":
                audio = new Audio("sounds/kick-bass.mp3");
                break;
            default:
                break;
        }
        audio.play();
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".set button")[i].addEventListener("click", function () {
        playKeySound(this.innerHTML)
    });
}
document.addEventListener("keydown",function(event){
    playKeySound(event.key);
});
