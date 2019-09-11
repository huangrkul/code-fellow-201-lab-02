'use strict';

//user name variables
var usr = prompt('Hello! What is your name?');
var userName = document.getElementById('userName');

//score variables
var scoreResult = document.getElementById('scoreResult');
var scoreDesc = document.getElementById('scoreDesc');
var score = 0;
var maxScore = 7;

var pqOneWin = false;
var pqTwoWin = false;
var pqThreeWin = false;
var pqFourWin = false;
var pqFiveWin = false;

console.log(usr);

//if no name is given, default to USER.
if(usr === '') {
  userName.innerText = 'USER';
} else {
  userName.innerText = usr.toUpperCase();
}

var pqOne;
var pqTwo;
var pqThree;
var pqFour;
var pqFive;

var txtOne = 'Do I have prior web development experience? (y/n) or (yes/no)';
var txtTwo = 'Am I an Animator? (y/n) or (yes/no)';
var txtThree = 'I used to be a world class Bartender. (y/n) or (yes/no)';
var txtFour = 'I strive to become a full stack javascript developer. (y/n) or (yes/no)';
var txtFive = 'Do I hate video games? (y/n) or (yes/no)';

var pqArray = [pqOne, pqTwo, pqThree, pqFour,pqFive];
var pqTxtArray = [txtOne, txtTwo, txtThree, txtFour, txtFive];


//mini game prompt
var pqMatch = confirm('Would you like to play a quick guessing game about me?');
if(pqMatch){

  //If yes, then game starts.
  //stretch goal: for loop that handles question 1 to 5 through switch statement.
  for (var i=0; i < pqArray.length; i++){
    /*each case is a prompt question and each question has switch statment for handling answers.  Every prompt question is wrapped in a do while loop to make sure user input correctly or else user has to try it again.*/
    switch(i) {
    case 0:
      do {
        pqArray[0] = prompt(pqTxtArray[0]);
        switch(pqArray[0].toLowerCase()) {
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
      console.log('your answer to first question is ' + pqArray[0]);
      console.log('your current score: ' + score);
      break;
    case 1:
      do {
        pqArray[1] = prompt(pqTxtArray[1]);
        switch(pqArray[1].toLowerCase()) {
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

      console.log('your answer to second question is ' + pqArray[1]);
      console.log('your current score: ' + score);
      break;
    case 2:
      do {
        pqArray[2] = prompt(pqTxtArray[2]);
        switch(pqArray[2].toLowerCase()) {
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

      console.log('your answer to second question is ' + pqArray[2]);
      console.log('your current score: ' + score);
      break;
    case 3:
      do {
        pqArray[3] = prompt(pqTxtArray[3]);
        switch(pqArray[3].toLowerCase()) {
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

      console.log('your answer to second question is ' + pqArray[3]);
      console.log('your current score: ' + score);
      break;
    case 4:
      do {
        pqArray[4] = prompt(pqTxtArray[4]);
        switch(pqArray[4].toLowerCase()) {
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

      console.log('your answer to second question is ' + pqArray[4]);
      console.log('your current score: ' + score);
      break;
    default:
      alert('something went wrong with the for loop :/');
      break;
    }
  }

  //question 6
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
    qSevenQuestion = qSevenQuestion.toLocaleLowerCase();
    for(var k=0; k < qSevenAnswers.length; k++){
      if(qSevenQuestion === qSevenAnswers[k]){
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
  }

  //result
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

} else {
  scoreResult.innerHTML = '???';
  scoreDesc.innerHTML = 'You chose not to play.';
}
