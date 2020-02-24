/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//pulls all keyboard buttons
 const alphabet = document.querySelectorAll(".key");
 //pulls element that will hold the quote to guess
 const quote_holder= document.querySelector('#phrase');
 //keeps track of runs of game
 var runs=0;


var game;
game= document.querySelector('#btn__reset').addEventListener("click", function (){
  var game = new Game();
  game.startGame();

  //Add Event Listerner only 1 time track runs
  runs +=1;
  if (runs<=1){
  //code to add event lister to keyboard
  for (i= 0; i < alphabet.length;i += 1) {
  alphabet[i].addEventListener('click',(e) =>{
  game.handleInteraction(e.target);
})};}});
