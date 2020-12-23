var database;
var gS, pC;
var game, player, form;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");  
}