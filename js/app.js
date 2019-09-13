'use strict';

//user name variables
var usr = prompt('Hello! What is your name?');
var userName = document.getElementById('userName');

//score variables
var scoreResult = document.getElementById('scoreResult');
var scoreDesc = document.getElementById('scoreDesc');
var score = 0;
var maxScore = 7;

console.log(usr);

//if no name is given, default to USER.
if(usr === '' || usr === null) {
  userName.innerText = 'USER';
} else {
  userName.innerText = usr.toUpperCase();
}

//question 1
function pqOneQuestion(){
  var pqOneWin = false;
  do {
    var pqOne = prompt('Do I have prior web development experience? (y/n) or (yes/no)');
    if(pqOne === null){
      pqOne = '';
    } else {
      pqOne.toLowerCase();
    }
    switch(pqOne) {
    case 'yes':
    case 'y':
      alert('Yes I do!');
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
  if(pqOneWin){
    pqTwoQuestion();
  }
  console.log('your answer to first question is ' + pqOne);
  console.log('your current score: ' + score);
}

//question 2
function pqTwoQuestion(){
  var pqTwoWin = false;
  do {
    var pqTwo = prompt('Am I an Animator? (y/n) or (yes/no)');
    if(pqTwo === null){
      pqTwo = '';
    } else {
      pqTwo.toLowerCase();
    }
    switch(pqTwo) {
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
  if(pqTwoWin){
    pqThreeQuestion();
  }
  console.log('your answer to second question is ' + pqTwo);
  console.log('your current score: ' + score);
}

//question 3
function pqThreeQuestion(){
  var pqThreeWin = false;
  do {
    var pqThree = prompt('I used to be a world class Bartender. (y/n) or (yes/no)');
    if(pqThree === null){
      pqThree = '';
    } else {
      pqThree.toLowerCase();
    }
    switch(pqThree) {
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
  if(pqThreeWin){
    pqFourQuestion();
  }
  console.log('your answer to third question is ' + pqThree);
  console.log('your current score: ' + score);
}

//question 4
function pqFourQuestion(){
  var pqFourWin = false;
  do {
    var pqFour = prompt('I strive to become a full stack javascript developer. (y/n) or (yes/no)');
    if(pqFour === null){
      pqFour = '';
    } else {
      pqFour.toLowerCase();
    }
    switch(pqFour) {
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
  if(pqFourWin){
    pqFiveQuestion();
  }
  console.log('your answer to fourth question is ' + pqFour);
  console.log('your current score: ' + score);
}

//question 5
function pqFiveQuestion(){
  var pqFiveWin = false;
  do {
    var pqFive = prompt('Do I hate video games? (y/n) or (yes/no)');
    if(pqFive === null){
      pqFive = '';
    } else {
      pqFive.toLowerCase();
    }
    switch(pqFive) {
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
  if(pqFiveWin){
    pqSixQuestion();
  }
  console.log('your answer to fifth question is ' + pqFive);
  console.log('your current score: ' + score);
}

//question 6
function pqSixQuestion(){
  var qSixChances = 4;
  var qSixAnswer = Math.floor(Math.random() * 10) + 1;
  var qSixWin = false;
  console.log(qSixAnswer);
  do {
    var qSix = prompt('Guess a number that I am thinking of between 1 ~ 10.  You have ' + qSixChances + ' chances left');
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
      alert('YOU GOT IT! NICE! Glad we think alike!');
      score += 1;
      qSixWin = true;
      console.log('your answer to question 6 is ' + qSix);
      console.log('your current score: ' + score);
      break;
    default:
      alert('this is not a valid input, try again!');
      break;
    }
  } while (qSixChances > 0 && !qSixWin);
  if(qSixWin){
    pqSevenQuestion();
  }

  if(qSixChances === 0 && !qSixWin) {
    alert('Sorry, you ran out of chances...sorry :/ \nthe correct number is ' + qSixAnswer);
    console.log('Sorry, you ran out of chances...sorry :/ \nthe correct number is ' + qSixAnswer);
    pqSevenQuestion();
  }
}

//question 7
function pqSevenQuestion(){
  var qSevenChances = 6;
  var qSevenAnswers = ['html','javascript','css'];
  var qSevenWin = false;
  do {
    var qSevenQuestion = prompt('Multiple Correct Answers (please type out entire answer):\nWhich of the following is a part of web development?\nHTML\nJavascript\nCSS\nBaseball Bat\nYou have ' + qSevenChances + ' chances left.');
    if(qSevenQuestion === null) {
      qSevenQuestion = '';
    } else {
      qSevenQuestion = qSevenQuestion.toLocaleLowerCase();
    }
    for(var i=0; i < qSevenAnswers.length; i++){
      if(qSevenQuestion === qSevenAnswers[i]){
        alert('your answer ' + qSevenQuestion + ' is correct!');
        score += 1;
        qSevenWin = true;
        console.log('your answer ' + qSevenQuestion + ' is correct!');
        console.log('your current score: ' + score);
      }
    }
    if(!qSevenWin){
      alert('Nope, try again~');
      qSevenChances -= 1;
    }

  } while (qSevenChances > 0 && !qSevenWin);

  if(qSevenChances === 0 || qSevenWin) {
    alert('Here are all the correct answers!\n' + qSevenAnswers[0] + ', ' + qSevenAnswers[1] + ', ' + qSevenAnswers[2] + '!');
    pqResult();
  }
}

//result
function pqResult(){
  var displayScore = score / maxScore * 100;
  displayScore = Math.floor(displayScore);
  var scoreText = '';
  var scoreScore = 'your score is ' + score + ' / ' + maxScore;
  scoreResult.innerHTML = displayScore + '%';
  switch(true) {
  case displayScore === 100:
    scoreText = 'Yay, glad to meet you!';
    break;
  case displayScore >= 80:
    scoreText = 'Nice! Thanks for taking your time.';
    break;
  case displayScore >= 60:
    scoreText = 'No worries, still above 50%';
    break;
  case displayScore >= 40:
    scoreText = 'Nice try!';
    break;
  case displayScore >= 20:
    scoreText = '....oy';
    break;
  case displayScore < 20:
    scoreText = 'We are probably from different worlds.';
    break;
  default:
    scoreText = 'Undefined score. Crazy...';
    break;
  }
  scoreDesc.innerHTML = scoreText + '<br>';
  scoreDesc.innerHTML += scoreScore;
  console.log('Your total score (%): ' + displayScore );
  console.log(scoreScore);

}

//mini game prompt
var pqMatch = confirm('Would you like to play a quick guessing game about me?');
if(pqMatch){
  //begin guessing game
  pqOneQuestion();
} else {
  scoreResult.innerHTML = '???';
  scoreDesc.innerHTML = 'You chose not to play.';
}
