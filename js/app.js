'use strict';
var usr;
var userName;

var pqMatch;
var pqWeb;
var pqGamer;
var pqOutdoor;
var pqPokemon;
var pqIntrovert;

var scoreResult;
var scoreDesc;
var score = 0;
var maxScore = 5;

function init() {
  userName = document.getElementById('userName');
  scoreResult = document.getElementById("scoreResult");
  scoreDesc = document.getElementById("scoreDesc");

  usr = prompt('Hello! What is your name?'); 
  userName.innerText = usr.toUpperCase();

  pqMatch = confirm('Would you like to play a quick personality match game?');

  if(pqMatch){
    initPqWeb();
  } else {
    endGame();
  }
}

function initPqWeb() {
  pqWeb = prompt('Do you love web development? (y/n) or (yes/no)');
  pqWeb.toLowerCase();

  if(pqWeb === 'yes' || pqWeb === 'y' || pqWeb === 'no' || pqWeb === 'n'){
    if(pqWeb === 'yes' || pqWeb === 'y'){
      score = score + 1;
    } 
    initPqGamer();
    console.log('Do you love web development? You answered ' + pqWeb.toUpperCase());
  } else {
    alert('Sorry, but that is not a proper answer.  Please try again.')
    console.log('Sorry, but that is not a proper answer.  Please read it again.');
    initPqWeb();
  }
}

function initPqGamer() {
  pqGamer = prompt('Are you a gamer? (y/n) or (yes/no)');
  pqGamer.toLowerCase();

  if(pqGamer === 'yes' || pqGamer === 'y' || pqGamer === 'no' || pqGamer === 'n'){
    if(pqGamer === 'yes' || pqGamer === 'y'){
      score = score + 1;
    } 
    initPqOutdoor();
    console.log('Are you a gamer? You answered ' + pqGamer.toUpperCase());
  } else {
    alert('Sorry, but that is not a proper answer.  Please try again.')
    console.log('Sorry, but that is not a proper answer.  Please read it again.');
    initPqGamer();
  }
}

function initPqOutdoor() {
  pqOutdoor = prompt('Do you hate outdoor activities? (y/n) or (yes/no)');
  pqOutdoor.toLowerCase();

  if(pqOutdoor === 'yes' || pqOutdoor === 'y' || pqOutdoor === 'no' || pqOutdoor === 'n'){
    if(pqOutdoor === 'no' || pqOutdoor === 'n'){
      score = score + 1;
    } 
    initPqPokemon();
    console.log('Do you hate outdoor activities? You answered ' + pqOutdoor.toUpperCase());
  } else {
    alert('Sorry, but that is not a proper answer.  Please try again.')
    console.log('Sorry, but that is not a proper answer.  Please read it again.');
    initpqOutdoor();
  }
}

function initPqPokemon() {
  pqPokemon = prompt('Do you play Pokemon GO? (y/n) or (yes/no)');
  pqPokemon.toLowerCase();

  if(pqPokemon === 'yes' || pqPokemon === 'y' || pqPokemon === 'no' || pqPokemon === 'n'){
    if(pqPokemon === 'yes' || pqPokemon === 'y'){
      score = score + 1;
    } 
    initPqIntrovert();
    console.log('Do you play Pokemon Go? You answered ' + pqPokemon.toUpperCase());
  } else {
    alert('Sorry, but that is not a proper answer.  Please try again.')
    console.log('Sorry, but that is not a proper answer.  Please read it again.');
    initpqPokemon();
  }
}

function initPqIntrovert() {
  pqIntrovert = prompt('Are you an introvert? (y/n) or (yes/no)');
  pqIntrovert.toLowerCase();

  if(pqIntrovert === 'yes' || pqIntrovert === 'y' || pqIntrovert === 'no' || pqIntrovert === 'n'){
    if(pqIntrovert === 'yes' || pqIntrovert === 'y'){
      score = score + 1;
    } 
    result();
    console.log('Do you play Pokemon Go? You answered ' + pqIntrovert.toUpperCase());
  } else {
    alert('Sorry, but that is not a proper answer.  Please try again.')
    console.log('Sorry, but that is not a proper answer.  Please read it again.');
    initpqPokemon();
  }
}

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

function endGame() {
  scoreResult.innerHTML = '???'
  scoreDesc.innerHTML = 'You chose not to play.'
}