var started = false;
var level = 0;
let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    gamePattern.push(randomNumber);
    let randomChosenColour = buttonColours[randomNumber];
    playSound(randomChosenColour);
    $(".btn").click(function(event){
      let userChosenColour = event.target.id;
      userClickedPattern.push(userChosenColour);
      animatePress(userChosenColour);
    });

    // return ;
}

// play sound when key is pressed
function playSound(name){
  let audio = new Audio("sounds/" + name + ".mp3");
  $("#"+name).on("click", function() {
      $("#" + name).fadeOut(100).fadeIn(100);
      audio.play();
    });
}

// animate the pressed button
function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
   }, 100);
}

// Start game by pressing any key
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level 0");
    nextSequence();
    started = true;
  }

});
