'use strict';

//user name variables
var usr = prompt('Hello! What is your name?');
var userName = document.getElementById('userName');

//score variables
var scoreResult = document.getElementById("scoreResult");
var scoreDesc = document.getElementById("scoreDesc");
var score = 0;
var maxScore = 7;

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
  var pqPigWin = false;
  do {
    var pqPig = prompt('Do pigs fly? (y/n) or (yes/no)');
    switch(pqPig.toLowerCase()) {
      case 'yes':
      case 'y':
        alert('No they don\'t unfortunately.');
        pqPigWin = true;
        break;
      case 'no':
      case 'n':
        alert('You are correct! Why would they?');
        score += 1;
        pqPigWin = true;
        break;
      default:
        alert('This is not the correct input.');
    }
  } while (!pqPigWin);

  console.log('your answer to first question is ' + pqPig);
  console.log('your current score: ' + score);
  
  //question 2
  var pqMouseWin = false;
  do {
    var pqMouse = prompt('can a mouse swim? (y/n) or (yes/no)');
    switch(pqMouse.toLowerCase()) {
      case 'yes':
      case 'y':
        alert('You are right! Double check your toilet before you sit on it.');
        score += 1;
        pqMouseWin = true;
        break;
      case 'no':
      case 'n':
        alert('Sorry, it can indeed!');
        pqMouseWin = true;
        break;
      default:
        alert('this is not the correct input.');
    }
  } while (!pqMouseWin);

  console.log('your answer to second question is ' + pqMouse);
  console.log('your current score: ' + score);

  //question 3 
  var pqBirdWin = false;
  do {
    var pqBird = prompt('Do horses eat meat? (y/n) or (yes/no)');
    switch(pqBird.toLowerCase()) {
      case 'yes':
      case 'y':
        alert('Negative, maybe a hellspawn?');
        pqBirdWin = true;
        break;
      case 'no':
      case 'n':
        score += 1;
        alert('Correct! Imagine they start eating their own kind...');
        pqBirdWin = true;
        break;
      default:
        alert('this is not the correct input.');
    }
  } while (!pqBirdWin);

  console.log('your answer to third question is ' + pqBird);
  console.log('your current score: ' + score);

  //question 4
  var pqBearWin = false;
  do {
    var pqBear = prompt('Can a bear kill you? (y/n) or (yes/no)');
    switch(pqBear.toLowerCase()) {
      case 'yes':
      case 'y':
        alert('Definitely! Unless are already dead.');
        score += 1;
        pqBearWin = true;
        break;
      case 'no':
      case 'n':
        alert('I am pretty sure it can.  Sorry~ my quiz my rules');
        pqBearWin = true;
        break;
      default:
        alert('this is not the correct input.');
    }
  } while (!pqBearWin);

  console.log('your answer to fourth question is ' + pqBear);
  console.log('your current score: ' + score);

  //question 5
  var pqDogWin = false;
  do {
    var pqDog = prompt('Can dogs become a web developer? (y/n) or (yes/no)');
    switch(pqDog.toLowerCase()) {
      case 'yes':
      case 'y':
        alert('Maybe in a few hundred years? But NO!');
        pqDogWin = true;
        break;
      case 'no':
      case 'n':
        alert('Good thing they can\'t, or else we are screwed');
        score += 1;
        pqDogWin = true;
        break;
      default:
        alert('this is not the correct input.');
    }
  } while (!pqDogWin);

  console.log('your answer to fifth question is ' + pqDog);
  console.log('your current score: ' + score);

  //question 6
  var qSixChances = 4;
  var qSixAnswer = Math.floor(Math.random() * 10) + 1;
  var qSixWin = false;
  console.log(qSixAnswer);
  do {
    var qSix = prompt('Guess a number between 1 ~ 10.  You have ' + qSixChances + ' chances left');
    console.log('you picked ' + qSix);
    var qSixInteger = parseInt(qSix, 10);
    switch(true) {
      case qSixInteger > qSixAnswer && qSixInteger > qSixAnswer + 2:
        alert('it\'s too high!  Lower!');
        qSixChances -= 1;
        break;
      case qSixInteger > qSixAnswer && qSixInteger <= qSixAnswer + 2:
        alert('you are so close, but still too high!');
        qSixChances -= 1;
        break;
      case qSixInteger < qSixAnswer && qSixInteger < qSixAnswer - 2:
        alert('this is too low! Higher!');
        qSixChances -= 1;
        break;
      case qSixInteger < qSixAnswer && qSixInteger >= qSixAnswer - 2:
        alert('so close! a little too low');
        qSixChances -= 1;
        break;
      case qSixInteger === qSixAnswer:
        alert('YOU GOT IT! NICE!');
        score += 1;
        qSixWin = true;
        console.log('your current score: ' + score);
        break;
      default:
        alert('this is not a valid input, try again!');
        break;
    }
  } while (qSixChances > 0 && !qSixWin);

  if(qSixChances === 0 && !qSixWin) {
    alert('Sorry, you ran out of chances...moving on.')
  } 

  //question 7
  var qSevenChances = 6;
  var qSevenAnswers = ['html','javascript','css'];
  var qSevenWin = false;
  do {
    var qSevenQuestion = prompt('Multiple Correct Answers (pick one):\nWhich of the following is a part of web development?\n1. HTML\n2. Javascript\n3. CSS\n4. Baseball Bat\n5. Your Favorite blanket\nYou have ' + qSevenChances + ' chances left.');
    var qSevenQuestion = qSevenQuestion.toLocaleLowerCase();
    for(var i=0; i < qSevenAnswers.length; i++){
      if(qSevenQuestion === qSevenAnswers[i]){
        alert('your answer ' + qSevenQuestion + ' is correct!');
        score += 1;
        qSevenWin = true;
        console.log('your current score: ' + score);
      }
    }
    if(!qSevenWin){
      alert('Nope, try again~')
      qSevenChances -= 1;
    }

  } while (qSevenChances > 0 && !qSevenWin);

  //result
  var displayScore = score / maxScore * 100;
  displayScore = Math.floor(displayScore);
  var scoreText = '';
  var scoreScore = 'your score is ' + score + ' / ' + maxScore;
  scoreResult.innerHTML = displayScore + '%';
  switch(true) {
    case displayScore === 100:
      scoreText = 'Yay, good thing you are sane!';
      break;
    case displayScore >= 80:
      scoreText = 'You thought mouse can\'t swim...right?';
      break;
    case displayScore >= 60:
      scoreText = 'I think you just made a few mistakes.';
      break;
    case displayScore >= 40:
      scoreText = 'Ok, now you are just messing with me.';
      break;
    case displayScore >= 20:
      scoreText = '...why?';
      break;
    case displayScore < 20:
      scoreText = 'You are probably from another world.';
      break;
    default:
      scoreText = 'Undefined score. Crazy...';
      break;
  }
  scoreDesc.innerHTML = scoreText + '<br>';
  scoreDesc.innerHTML += scoreScore;

} else {
  scoreResult.innerHTML = '???';
  scoreDesc.innerHTML = 'You chose not to play.';
}