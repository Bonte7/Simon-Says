//store the available colors in the game
const buttonColors = ["red", "blue", "green", "yellow"];

//store user selected colors
let userClickedPattern = [];

//array to store the color pattern for the ganme
let gamePattern = [];

/*--------- Game ---------- */
//Start a pattern sequence on keypress
$(document).keypress(function nextSequence(event) {

//only proceed if the a key is pressed
  if (event.key === 'a') {
    //generate a random num between 0 - 3
    let randomNum = Math.floor(Math.random() * 4);

    //grab a random color from the array and store it
    let randomChosenColor = buttonColors[randomNum];

    //push the random color to the pattern array
    gamePattern.push(randomChosenColor);

    animatePress(randomChosenColor);

    playSound(randomChosenColor);
  }
  else {
    console.log("Incorrect key pressed");
  }

});


/*--------- Player ---------- */
$(".btn").click(function(event) {

  //get the id for the color that was clicked
  let userChosenColor = event.currentTarget.id;

  //push the color that was clicked to the user array
  userClickedPattern.push(userChosenColor);

  console.log(userClickedPattern);

  //animate the clicks
  animatePress(userChosenColor)

  playSound(userChosenColor);
});

/*--------- Game Sounds ---------- */
function playSound(name) {

  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

/*--------- Animation ---------- */
function animatePress(currentColor) {
  //add css class to the selected color button
  $("#" + currentColor).addClass("pressed");
  //remove the class after 100 miliseconds
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
