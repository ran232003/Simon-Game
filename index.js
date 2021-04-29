var userClickArray = [];
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var count = 0;
var level = "level";
var randomColor = "";
var patternLength = 0;
var userLength = 0;
var flag = 1;
function nextSequence()
{
  var randNum = Math.floor(Math.random()*4);
  randomColor = buttonColors[randNum];
  gamePattern.push(randomColor);
  console.log(gamePattern,"gamePattern");

  $("#"+randomColor).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/"+randomColor+".mp3");
  audio.play();
  count++;
  $("h1").text("level "+count)
}
//
// randomColor = buttonColors[nextSequence()];
// gamePattern.push(randomColor);

$(document).keypress(function(){
  if(count===0)
  {
  nextSequence();
  // $("#"+randomColor).fadeOut(100).fadeIn(100);
  // var audio = new Audio("sounds/"+randomColor+".mp3");
  // audio.play();
  // count++;
  // $("h1").text("level "+count)
}
})

$(".btn").click(function(event){
  if(count === 0 || flag ===0)
  {
    return false;
  }
  if(userLength < count){
  console.log("if 1");
  userColor = this.id;
  userClickArray.push(userColor);
  console.log(userClickArray,"user pattern");
  $("#"+userColor).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/"+userColor+".mp3");
  audio.play();
}
console.log(userLength);
console.log(userClickArray[userLength]);

if(userClickArray[userLength]!=gamePattern[userLength])
{
  console.log("if2");
  //game over
  $("h1").text("GAME OVER")
  var sound = new Audio("sounds/wrong.mp3");
  sound.play();
  flag = 0;


}
else{
  userLength++;
  if(userLength ===count){
  userLength = 0;
  userClickArray = [];
  console.log("else");
  setTimeout(function(){nextSequence()},400)
  //nextSequence()
}
}
})
