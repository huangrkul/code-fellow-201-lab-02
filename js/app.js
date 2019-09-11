'use strict';

//user name variables
var usr = prompt('Hello! What is your name?');
var userName = document.getElementById('userName');

//score variables
var scoreResult = document.getElementById('scoreResult');
var scoreDesc = document.getElementById('scoreDesc');
var score = 0;
var maxScore = 7;

//if no name is given, default to USER.
if(usr == null) {
  userName.innerText = 'USER';
} else {
  userName.innerText = usr.toUpperCase();
}

//mini game prompt
var pqMatch = confirm('Would you like to play a quick guessing game about me?');
if(pqMatch){
  //If yes, then question 1 starts.
  var pqOneWin = false;
  do {
    var pqOne = prompt('Do I have prior web development experience? (y/n) or (yes/no)');
    switch(pqOne.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Yes I does!');
      score += 1;
      pqOneWin = true;
      break;
    case 'no':
    case 'n':
      alert('Sorry, but I do.');
      pqOneWin = true;
      break;
    default:
      alert('This is not the correct input, try again.');
    }
  } while (!pqOneWin);

  console.log('your answer to first question is ' + pqOne);
  console.log('your current score: ' + score);

  //question 2
  var pqTwoWin = false;
  do {
    var pqTwo = prompt('Am I an Animator? (y/n) or (yes/no)');
    switch(pqTwo.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Yep!  I have a MFA in 3D Character Animation');
      score += 1;
      pqTwoWin = true;
      break;
    case 'no':
    case 'n':
      alert('BUT I am :D');
      pqTwoWin = true;
      break;
    default:
      alert('this is not the correct input.');
    }
  } while (!pqTwoWin);

  console.log('your answer to second question is ' + pqTwo);
  console.log('your current score: ' + score);

  //question 3
  var pqThreeWin = false;
  do {
    var pqThree = prompt('I used to be a world class Bartender. (y/n) or (yes/no)');
    switch(pqThree.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Nah, alcohol and I are not good friends.');
      pqThreeWin = true;
      break;
    case 'no':
    case 'n':
      score += 1;
      alert('I suppose I wouldn\'nt be here if I am world class...');
      pqThreeWin = true;
      break;
    default:
      alert('this is not the correct input.');
    }
  } while (!pqThreeWin);

  console.log('your answer to third question is ' + pqThree);
  console.log('your current score: ' + score);

  //question 4
  var pqFourWin = false;
  do {
    var pqFour = prompt('I strive to become a full stack javascript developer. (y/n) or (yes/no)');
    switch(pqFour.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Indeed!');
      score += 1;
      pqFourWin = true;
      break;
    case 'no':
    case 'n':
      alert('I suppose I can try oth...NOPE!');
      pqFourWin = true;
      break;
    default:
      alert('this is not the correct input.');
    }
  } while (!pqFourWin);

  console.log('your answer to fourth question is ' + pqFour);
  console.log('your current score: ' + score);

  //question 5
  var pqFiveWin = false;
  do {
    var pqFive = prompt('Do I hate video games? (y/n) or (yes/no)');
    switch(pqFive.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('That would be a terrible reality.');
      pqFiveWin = true;
      break;
    case 'no':
    case 'n':
      alert('I am a game nerd.');
      score += 1;
      pqFiveWin = true;
      break;
    default:
      alert('this is not the correct input.');
    }
  } while (!pqFiveWin);

  console.log('your answer to fifth question is ' + pqFive);
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
    alert('Sorry, you ran out of chances...moving on.');
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
      alert('Nope, try again~');
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
