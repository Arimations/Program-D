var sound = new Howl({
    src: ['HBS.mp3']
});

sound.play();/*
==================================================
Get all necessary DOM:
1. class .card
2. class .front
==================================================
*/
var Card = document.querySelector(".card")
var Front = document.querySelector(".front")



/*
==================================================
Create a variable isOpen and set the value to false
==================================================
*/
var isOpen = false; //not open

/*
==================================================
Attach addEventListener to .card (make it clickable):
1. If the card is open
    - remove class .open from .front
    - toggle variable isOpen (make isOpen to be not true)
2. Else if the card is close
    - add class .open to .front
    - toggle variable isOpen (make isOpen to be true)
Hint: Use classList.remove("className") to remove a class,
while classList.add("className") to add a class.
==================================================
*/

Card.addEventListener("click", function () {
    if (isOpen == true) {
        Front.classList.remove("open");
        isOpen = false;
        sound.stop();
    }
    else {
        Front.classList.add("open");
        isOpen = true;
        sound.play();
    }

})