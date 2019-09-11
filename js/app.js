'use strict';

//all variables declared here.  Values will be added after init().

//user name variables
var usr;
var userName;

//pq = prompt question.  Mini game variables
var pqMatch;
var pqWeb;
var pqGamer;
var pqOutdoor;
var pqPokemon;
var pqIntrovert;

//score variables
var scoreResult;
var scoreDesc;
var score = 0;
var maxScore = 5;

function init() {
  //this ensures everything in body is loaded before giving value to variables.
  userName = document.getElementById('userName');
  scoreResult = document.getElementById("scoreResult");
  scoreDesc = document.getElementById("scoreDesc");

  usr = prompt('Hello! What is your name?');

  //if no name is given, default to USER.
  if(usr == null) {
    userName.innerText = 'USER';
  } else {
    userName.innerText = usr.toUpperCase();
  }
  
  //mini game prompt
  pqMatch = confirm('Would you like to play a quick personality match game?');
  if(pqMatch){
    initPqWeb();
  } else {
    endGame();
  }
}

//alert for when user input correctly.
function alertTxt() {
  alert('You answered correctly! By that, I mean you followed the instruction in the prompt, well done!')
}

//first question in mini game
function initPqWeb() {
  pqWeb = prompt('Do you love web development? (y/n) or (yes/no)');
  pqWeb.toLowerCase();

  if(pqWeb === 'yes' || pqWeb === 'y' || pqWeb === 'no' || pqWeb === 'n'){
    if(pqWeb === 'yes' || pqWeb === 'y'){
      score += 1;
    } 
    alertTxt();
    initPqGamer();
    console.log('Do you love web development? You answered ' + pqWeb.toUpperCase());
  } else {
    alert('Sorry, but that is not a proper answer.  Please try again.')
    console.log('Sorry, but that is not a proper answer.  Please read it again.');
    initPqWeb();
  }
}

//second question in mini game
function initPqGamer() {
  pqGamer = prompt('Are you a gamer? (y/n) or (yes/no)');
  pqGamer.toLowerCase();

  if(pqGamer === 'yes' || pqGamer === 'y' || pqGamer === 'no' || pqGamer === 'n'){
    if(pqGamer === 'yes' || pqGamer === 'y'){
      score += 1;
    }
    alertTxt(); 
    initPqOutdoor();
    console.log('Are you a gamer? You answered ' + pqGamer.toUpperCase());
  } else {
    alert('Sorry, but that is not a proper answer.  Please try again.')
    console.log('Sorry, but that is not a proper answer.  Please read it again.');
    initPqGamer();
  }
}

//third question in mini game
function initPqOutdoor() {
  pqOutdoor = prompt('Do you hate outdoor activities? (y/n) or (yes/no)');
  pqOutdoor.toLowerCase();

  if(pqOutdoor === 'yes' || pqOutdoor === 'y' || pqOutdoor === 'no' || pqOutdoor === 'n'){
    if(pqOutdoor === 'no' || pqOutdoor === 'n'){
      score += 1;
    }
    alertTxt();
    initPqPokemon();
    console.log('Do you hate outdoor activities? You answered ' + pqOutdoor.toUpperCase());
  } else {
    alert('Sorry, but that is not a proper answer.  Please try again.')
    console.log('Sorry, but that is not a proper answer.  Please read it again.');
    initpqOutdoor();
  }
}

//fourth question in mini game
function initPqPokemon() {
  pqPokemon = prompt('Do you play Pokemon GO? (y/n) or (yes/no)');
  pqPokemon.toLowerCase();

  if(pqPokemon === 'yes' || pqPokemon === 'y' || pqPokemon === 'no' || pqPokemon === 'n'){
    if(pqPokemon === 'yes' || pqPokemon === 'y'){
      score += 1;
    } 
    alertTxt();
    initPqIntrovert();
    console.log('Do you play Pokemon Go? You answered ' + pqPokemon.toUpperCase());
  } else {
    alert('Sorry, but that is not a proper answer.  Please try again.')
    console.log('Sorry, but that is not a proper answer.  Please read it again.');
    initpqPokemon();
  }
}

//fifth question in mini game
function initPqIntrovert() {
  pqIntrovert = prompt('Are you an introvert? (y/n) or (yes/no)');
  pqIntrovert.toLowerCase();

  if(pqIntrovert === 'yes' || pqIntrovert === 'y' || pqIntrovert === 'no' || pqIntrovert === 'n'){
    if(pqIntrovert === 'yes' || pqIntrovert === 'y'){
      score += 1;
    } 
    alertTxt();
    result();
    console.log('Do you play Pokemon Go? You answered ' + pqIntrovert.toUpperCase());
  } else {
    alert('Sorry, but that is not a proper answer.  Please try again.')
    console.log('Sorry, but that is not a proper answer.  Please read it again.');
    initpqIntrovert();
  }
}

//result is generated here
function result() {
  var displayScore = score / maxScore * 100;
  var scoreText;
  scoreResult.innerHTML = displayScore + '%!';
  console.log('Our match score is ' + displayScore + '!!');
  switch(displayScore) {
    case 100:
      scoreText = 'Looks like we are best pal!';
      break;
    case 80:
      scoreText = 'We can be good friends!';
      break;
    case 60:
      scoreText = 'We can be friends, yay!';
      break;
    case 40:
      scoreText = '2 out of 5, woot!';
      break;
    case 20:
      scoreText = 'Guess we don\'t have much in common.';
      break;
    case 0:
      scoreText = 'You and I are from different world! Cool!';
      break;
    default:
      scoreText = 'Undefined score. Crazy...'
      break;
  }
  console.log(scoreText);
  scoreDesc.innerHTML = scoreText;
}

//if user choose not to play the matching game.
function endGame() {
  scoreResult.innerHTML = '???'
  scoreDesc.innerHTML = 'You chose not to play.'
}