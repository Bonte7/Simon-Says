//store the available colors in the game
const buttonColors = ["red", "blue", "green", "yellow"];

//array to store the color pattern for the ganme
let gamePattern = [];


//Start a pattern sequence on keypress
$(document).keypress(function nextSequence() {
  //generate a random num between 0 - 3
  let randomNum = Math.floor(Math.random() * 4);

  //grab a random color from the array and store it
  let randomChosenColor = buttonColors[randomNum];

  //push the random color to the pattern array
  gamePattern.push(randomChosenColor);

  //get the id for the html element and animate a flash
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();

});
