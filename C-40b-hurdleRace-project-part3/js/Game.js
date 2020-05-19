class Game 
{
  constructor()
  {

  }

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){gameState = data.val();})
  }

  update(state)
  {
    database.ref('/').update({gameState: state});
  }

  async start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists())
      {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    player1 = createSprite(100,200);
    player1.addImage("player1Image",player1Image);
    player2 = createSprite(300,200);
    player2.addImage("player2Image",player2Image);
    player3 = createSprite(500,200);
    player3.addImage("player3Image",player3Image);
    player4 = createSprite(700,200);
    player4.addImage("player4Image",player4Image);
    players = [player1,player2,player3,player4];
  }

  play()
  {
    form.hide();
    Player.getPlayerInfo();
    player.getCars(); 
    if(allPlayers !== undefined)
    {
      background("#c68767");
      image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index = 0;
      var x = 175;
      var y;
      for(var plr in allPlayers)
      {
        index = index + 1 ;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        players[index-1].x = x;
        players[index-1].y = y;
        if (index === player.index)
        {
          players[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
        }
      }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null)
    {
      player.distance +=10
      player.update();
    }
    if(player.distance>3650)
    {
      gameState = 2;
      player.rank+=1;
      Player.rankUpdate(player.rank);
    }
    drawSprites();
  }
  
  end()
  {
    game.update(2);
    textSize(50);
    text("GAME OVER",camera.position.x,camera.position.y);
    text("YOUR RANK IS " + 1,camera.position.x,camera.position.y-50);
  }
}
