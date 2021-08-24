/*--------- Global Variables ---------- */
//store the available colors in the game
const buttonColors = ["red", "blue", "green", "yellow"];
//store user selected colors
let userClickedPattern = [];
//array to store the color pattern for the game
let gamePattern = [];
//used to keep track of levels
let level = 0;
//used to determine is the game has started or not
let isGameStarted = false;

/*--------- Game ---------- */
function nextSequence() {
  //start the game and increment the level
  isGameStarted = true;
  level++;
  $("#level-title").text("Level " + level);
  //generate a random num between 0 - 3
  let randomNum = Math.floor(Math.random() * 4);
  //grab a random color from the array and store it
  let randomChosenColor = buttonColors[randomNum];
  //push the random color to the pattern array
  gamePattern.push(randomChosenColor);

  animatePress(randomChosenColor);

  playSound(randomChosenColor);
}

// detect keypress to start the game
$(document).keypress(function() {

  //make sure a key press is only handled once
  if (isGameStarted === false){
    nextSequence();
  }
  else {
    console.log("Game has already started");
  }

});

//// TODO: create check answer function and compare user answers to game selection
function checkAnswer(currentLevel) {
  console.log(currentLevel)

  //compare the selected answer with the gamePattern
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    console.log("success");

    //delay the next sequence call
    setTimeout(function() {
      nextSequence();
    }, 1000);

  }
  else {
    console.log("wrong");
  }
}


/*--------- Player ---------- */
$(".btn").click(function(event) {
  //get the id for the color that was clicked
  let userChosenColor = event.currentTarget.id;
  //push the color that was clicked to the user array
  userClickedPattern.push(userChosenColor);
  //animate the clicks
  animatePress(userChosenColor)

  playSound(userChosenColor);
  //send the index of the last color chosen to check answer
  checkAnswer(userClickedPattern.lastIndexOf(userChosenColor));
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
