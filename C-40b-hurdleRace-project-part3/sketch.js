var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var trackImage;
var player1,player2,player3,player4;
var players;
var player1Image,player2Image,player3Image,player4Image;
var hurdle1,hurdle2,hurdle3,hurdle4;
var hurdles;
var hurdle1Image,hurdle2Image,hurdle3Image,hurdle4Image;

function preload()
{
  trackImage = loadImage("../images/track.png");
  player1Image = loadImage("../images/player1.gif");
  player2Image = loadImage("../images/player2.gif");
  player3Image = loadImage("../images/player3.gif");
  player4Image = loadImage("../images/player4.gif");
  hurdle1Image = loadImage("../images/hurdle1.jpg");
  hurdle2Image = loadImage("../images/hurdle2.jpg");
  hurdle3Image = loadImage("../images/hurdle3.jpg");
  hurdle4Image = loadImage("../images/hurdle4.jpg");
}

function setup()
{
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw()
{
  if(playerCount === 4)
  {
    game.update(1);
  }
  if(gameState === 1)
  {
    clear();
    game.play();
  }
  if(gameState===2)
  {
    game.end();
  }
  if(player1.isTouching(hurdle1) || player2.isTouching(hurdle2) || player3.isTouching(hurdle3) || player4.isTouching(hurdle4))
  {
    gameState=3;
  }
  if(gameState===3)
  {
    game.blank();
  }
}
