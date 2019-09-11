'use strict';

//user name variables
var usr = prompt('Hello! What is your name?');
var userName = document.getElementById('userName');

//score variables
var scoreResult = document.getElementById("scoreResult");
var scoreDesc = document.getElementById("scoreDesc");
var score = 0;
var maxScore = 5;

//if no name is given, default to USER.
if(usr == null) {
  userName.innerText = 'USER';
} else {
  userName.innerText = usr.toUpperCase();
}

//mini game prompt
var pqMatch = confirm('Would you like to play a quick guessing game?');
if(pqMatch){
  //If yes, then question 1 starts.
  var pqPig = prompt('Do pigs fly? (y/n) or (yes/no)');
  switch(pqPig.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('No they don\'t unfortunately.');
      break;
    case 'no':
    case 'n':
      alert('You are correct! Why would they?');
      score += 1;
      break;
    default:
      alert('This is not the correct input.');
  }
  console.log('your answer to first question is ' + pqPig);
  console.log('your current score: ' + score);
  
  //question 2
  var pqMouse = prompt('can a mouse swim? (y/n) or (yes/no)');
  switch(pqMouse.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('You are right! Double check your toilet before you sit on it.');
      score += 1;
      break;
    case 'no':
    case 'n':
      alert('Sorry, it can indeed!');
      break;
    default:
      alert('this is not the correct input.');
  }
  console.log('your answer to second question is ' + pqMouse);
  console.log('your current score: ' + score);

  //question 3 
  var pqBird = prompt('Do horses eat meat? (y/n) or (yes/no)');
  switch(pqBird.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Negative, maybe a hellspawn?');
      break;
    case 'no':
    case 'n':
      score += 1;
      alert('Correct! Imagine they start eating their own kind...');
      break;
    default:
      alert('this is not the correct input.');
  }
  console.log('your answer to third question is ' + pqBird);
  console.log('your current score: ' + score);

  //question 4
  var pqBear = prompt('Can a bear kill you? (y/n) or (yes/no)');
  switch(pqBear.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Definitely! Unless are already dead.');
      score += 1;
      break;
    case 'no':
    case 'n':
      alert('I am pretty sure it can.  Sorry~ my quiz my rules');
      break;
    default:
      alert('this is not the correct input.');
  }
  console.log('your answer to fourth question is ' + pqBear);
  console.log('your current score: ' + score);

  //question 5
  var pqDog = prompt('Can dogs become a web developer? (y/n) or (yes/no)');
  switch(pqDog.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Maybe in a few hundred years? But NO!');
      break;
    case 'no':
    case 'n':
      alert('Good thing they can\'t, or else we are screwed');
      score += 1;
      break;
    default:
      alert('this is not the correct input.');
  }
  console.log('your answer to fifth question is ' + pqDog);
  console.log('your current score: ' + score);

  //result
  var displayScore = score / maxScore * 100;
  var scoreText = '';
  scoreResult.innerHTML = displayScore + '%';
  switch(displayScore) {
    case 100:
      scoreText = 'Yay, good thing you are sane!';
      break;
    case 80:
      scoreText = 'You thought mouse can\'t swim...right?';
      break;
    case 60:
      scoreText = 'I think you just made a few mistakes.';
      break;
    case 40:
      scoreText = 'Ok, now you are just messing with me.';
      break;
    case 20:
      scoreText = '...why?';
      break;
    case 0:
      scoreText = 'You are probably from another world.';
      break;
    default:
      scoreText = 'Undefined score. Crazy...'
      break;
  }
  scoreDesc.innerHTML = scoreText;

} else {
  scoreResult.innerHTML = '???';
  scoreDesc.innerHTML = 'You chose not to play.';
}