'use strict';

//user name variables
var usr = prompt('Hello! What is your name?');
var userName = document.getElementById('userName');

//question 1-5 variables
var pqOne;
var pqTwo;
var pqThree;
var pqFour;
var pqFive;
var pqSix;
var pqSeven;

//score variables
var scoreResult = document.getElementById('scoreResult');
var scoreDesc = document.getElementById('scoreDesc');
var score = 0;
var maxScore = 7;


//if no name is given, default to USER.
if(usr === '' || usr === null) {
  userName.innerText = 'USER';
} else {
  userName.innerText = usr.toUpperCase();
}

console.log('Welcome! ' + usr);
//question 1
function pqOneQuestion(){
  var pqOneWin = false;
  do {
    pqOne = prompt('Do I have prior web development experience? (y/n) or (yes/no)');
    if(pqOne === null) {
      pqOne = '';
    }
    switch(pqOne.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Yes I do!');
      score += 1;
      pqOneWin = true;
      console.log('Q1. your current score: ' + score);
      break;
    case 'no':
    case 'n':
      alert('Sorry, but I do.');
      pqOneWin = true;
      console.log('Q1. your current score: ' + score);
      break;
    default:
      alert('This is not the correct input, try again.');
    }
  } while (!pqOneWin);
  if(pqOneWin){
    pqTwoQuestion();
  }
}

//question 2
function pqTwoQuestion(){
  var pqTwoWin = false;
  do {
    pqTwo = prompt('Am I an Animator? (y/n) or (yes/no)');
    if(pqTwo === null) {
      pqTwo = '';
    }
    switch(pqTwo.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Yep!  I have a MFA in 3D Character Animation');
      score += 1;
      pqTwoWin = true;
      console.log('Q2. your current score: ' + score);
      break;
    case 'no':
    case 'n':
      alert('BUT I am :D');
      pqTwoWin = true;
      console.log('Q2. your current score: ' + score);
      break;
    default:
      alert('this is not the correct input.');
    }
  } while (!pqTwoWin);
  if(pqTwoWin){
    pqThreeQuestion();
  }
}

//question 3
function pqThreeQuestion(){
  var pqThreeWin = false;
  do {
    pqThree = prompt('I used to be a world class Bartender. (y/n) or (yes/no)');
    if(pqThree === null) {
      pqThree = '';
    }
    switch(pqThree.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Nah, alcohol and I are not good friends.');
      pqThreeWin = true;
      console.log('Q3. your current score: ' + score);
      break;
    case 'no':
    case 'n':
      score += 1;
      alert('I suppose I wouldn\'nt be here if I am world class...');
      pqThreeWin = true;
      console.log('Q3. your current score: ' + score);
      break;
    default:
      alert('this is not the correct input.');
    }
  } while (!pqThreeWin);
  if(pqThreeWin){
    pqFourQuestion();
  }
}

//question 4
function pqFourQuestion(){
  var pqFourWin = false;
  do {
    pqFour = prompt('I strive to become a full stack javascript developer. (y/n) or (yes/no)');
    if(pqFour === null) {
      pqFour = '';
    }
    switch(pqFour.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Indeed!');
      score += 1;
      pqFourWin = true;
      console.log('Q4. your current score: ' + score);
      break;
    case 'no':
    case 'n':
      alert('I suppose I can try oth...NOPE!');
      pqFourWin = true;
      console.log('Q4. your current score: ' + score);
      break;
    default:
      alert('this is not the correct input.');
    }
  } while (!pqFourWin);
  if(pqFourWin){
    pqFiveQuestion();
  }
}

//question 5
function pqFiveQuestion(){
  var pqFiveWin = false;
  do {
    pqFive = prompt('Do I hate video games? (y/n) or (yes/no)');
    if(pqFive === null) {
      pqFive = '';
    }
    switch(pqFive.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('That would be a terrible reality.');
      pqFiveWin = true;
      console.log('Q5. your current score: ' + score);
      break;
    case 'no':
    case 'n':
      alert('I am a game nerd.');
      score += 1;
      pqFiveWin = true;
      console.log('Q5. your current score: ' + score);
      break;
    default:
      alert('this is not the correct input.');
    }
  } while (!pqFiveWin);
  if(pqFiveWin){
    pqSixQuestion();
  }
}

//question 6
function pqSixQuestion(){
  var qSixChances = 4;
  var qSixAnswer = Math.floor(Math.random() * 10) + 1;
  var qSixWin = false;
  do {
    pqSix = prompt('Guess a number that I am thinking of between 1 ~ 10.  You have ' + qSixChances + ' chances left');
    console.log('Question 6, you picked ' + pqSix);
    var qSixInteger = parseInt(pqSix, 10);
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
      console.log('Q6. your current score: ' + score);
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
    console.log('Q6. Sorry, you ran out of chances...sorry :/ \nthe correct number is ' + qSixAnswer);
    pqSevenQuestion();
  }
}

//question 7
function pqSevenQuestion(){
  var qSevenChances = 6;
  var qSevenAnswers = ['html','javascript','css'];
  var qSevenWin = false;
  do {
    pqSeven = prompt('Multiple Correct Answers (please type out entire answer):\nWhich of the following is a part of web development?\nHTML\nJavascript\nCSS\nBaseball Bat\nYou have ' + qSevenChances + ' chances left.');
    if(pqSeven === null) {
      pqSeven = '';
    } else {
      pqSeven = pqSeven.toLocaleLowerCase();
    }
    for(var i=0; i < qSevenAnswers.length; i++){
      if(pqSeven === qSevenAnswers[i]){
        alert('your answer ' + pqSeven + ' is correct!');
        score += 1;
        qSevenWin = true;
        console.log('your answer ' + pqSeven + ' is correct!');
        console.log('Q7. your current score: ' + score);
      }
    }
    if(!qSevenWin){
      alert('Nope, try again~');
      qSevenChances -= 1;
    }

  } while (qSevenChances > 0 && !qSevenWin);

  if(qSevenChances === 0 || qSevenWin) {
    alert('Here are all the correct answers!\n' + qSevenAnswers[0] + ', ' + qSevenAnswers[1] + ', ' + qSevenAnswers[2] + '!');
    console.log('Q7. Here are all the correct answers!\n' + qSevenAnswers[0] + ', ' + qSevenAnswers[1] + ', ' + qSevenAnswers[2] + '!');
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
  console.log('your answer to first question is ' + pqOne);
  console.log('your answer to second question is ' + pqTwo);
  console.log('your answer to third question is ' + pqThree);
  console.log('your answer to fourth question is ' + pqFour);
  console.log('your answer to fifth question is ' + pqFive);
  console.log('your answer to sixth question is ' + pqSix);
  console.log('your answer to seventh question is ' + pqSeven);
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
