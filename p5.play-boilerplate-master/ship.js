class Ship{
    constructor(type,x,y){
        this.sprite=createSprite(x,y)
        
        if(type === "EnCaptain"){
            this.sprite.addImage(EnCaptain)
            this.sprite.velocityY = 4;
        }
        else if(type === "En1"){
            this.sprite.addImage(EnType1)
            this.sprite.scale = 0.45;
            this.sprite.rotation = 90;
            this.sprite.velocityX = random(1,4);
            this.sprite.velocityY = random(1,4);
        }
        else if(type === "En2"){
            this.sprite.addImage(EnType2)
            this.sprite.scale = 0.45;
            this.sprite.rotation = 90;
            this.sprite.velocityX = random(1,4);
            this.sprite.velocityY = random(1,4);
        }
        else if(type === "En3"){
            this.sprite.addImage(EnType3)
            this.sprite.scale = 0.45;
            this.sprite.rotation = 90;
            this.sprite.velocityX = random(1,4);
            this.sprite.velocityY = random(1,4);
        }
    }
    movement(type){
        
            this.sprite.bounceOff(edges)
            if(this.sprite.isTouching(PlayerShip.sprite)){
                console.log('game over');
                lives=lives-0.005;
            }
        
    }
}
class Player{
    constructor(x,y){
        this.sprite=createSprite(x,y)
        this.sprite.addImage(playerImage);
        this.sprite.scale = 0.6;
    }
    control(){
        if (keyDown("up")|| keyDown("W")){
            this.sprite.y-= 5;
        }
        if (keyDown("down") || keyDown("S")){
            this.sprite.y+= 5;
        }
        if (keyDown("left") || keyDown("A")){
            this.sprite.x-= 5;
        }
        if (keyDown("right") || keyDown("D")){
            this.sprite.x+= 5;
        }
    }
}