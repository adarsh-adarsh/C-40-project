class Obstacles
{
  constructor()
  {
    
  }

  jump()
  {
    if(keyCode(32))
    {
      this.body.velocityX=this.body.velocityX+50;
    }
  }

  Hurdle1() 
  {
    if(World.frameCount % 60 === 0) 
    {
      hurdle1 = createSprite(100,200);    
      hurdle1.addImage();
      hurdle1.velocityY = - (6 + 3*count/100);
      hurdle1.scale = 0.5;
      hurdle1.jump();
    }
  }
  
  Hurdle2() 
  {
    if(World.frameCount % 60 === 0) 
    {
      hurdle2 = createSprite(300,200);    
      hurdle2.addImage();
      hurdle2.velocityY = - (6 + 3*count/100);
      hurdle2.scale = 0.5;
      hurdle2.jump();
    }
  }
  
  Hurdle3() 
  {
    if(World.frameCount % 60 === 0) 
    {
      hurdle3 = createSprite(500,200);    
      hurdle3.addImage();
      hurdle3.velocityY = - (6 + 3*count/100);
      hurdle3.scale = 0.5;
      hurdle3.jump();
    }
  }
  
  Hurdle4() 
  {
    if(World.frameCount % 60 === 0) 
    {
      hurdle4 = createSprite(700,200);    
      hurdle4.addImage();
      hurdle4.velocityY = - (6 + 3*count/100);
      hurdle4.scale = 0.5;
      hurdle4.jump();
    }
  }
  
  blank()
  {
    background("white");
    textSize(30);
    text("YOU LOSE",camera.position.x,camera.position.y);
  }
}
