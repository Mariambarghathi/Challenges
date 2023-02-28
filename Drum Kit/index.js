var numberofbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofbuttons; i++) {

  //click listener
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttoninnerhtml = this.innerHTML;
    Makesound(buttoninnerhtml);
    keyanimation(buttoninnerhtml);
  });
}

//keypress listener
addEventListener("keypress", function(event) {
  Makesound(event.key);
  keyanimation(event.key);
});


//Main function
function Makesound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(buttoninnerhtml);

  }
}

function keyanimation(currentkey) {
  var activebutton = document.querySelector("." + currentkey);
  activebutton.classList.add("pressed");

  setTimeout(() => {
    activebutton.classList.remove("pressed");
  }, 100);
}
