'use strict';
var usr;
var usrUp;
var userName;

function init() {
  usr = prompt('Hello! What is your name?'); 
  usrUp = usr.toUpperCase();
  userName = document.getElementById('userName');
  userName.innerText = usrUp;
}

