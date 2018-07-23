//this is my prototype for all characters (player and enemies)
class Characters{
    //sizing of my characters
    constructor(){
        this.x=2;
        this.y=5;
    }

    // Draw the enemy on the screen, required method for game
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x*101, this.y*83);
    }
    //update method
    update(dt){
        this.onCanvasX = this.x >5;
        this.onCanvasY = this.y <1;
    }
}

// Now write your own enemy class
class Enemy extends Characters{
    constructor(x,y){
        super();
        this.sprite = 'images/enemy-bug.png';
        this.x=x;
        this.y=y;
    }
    update(dt){
        super.update();
        if(this.onCanvasX){
            this.x=this.x-6;
        }else{
            this.x = this.x+dt;
        }
    }
    checkCollisions(player){
        //console.log(this.y+" "+(player.y-0.2));

        if(this.y=== player.y -.2){
            //console.log("they do collide yy");
            if(this.x===player.x - .5 && this.x<=player.x +.5){
                console.log("they do collide");
                return true;
            }
        }else{
            return false;
        }
    }
}

// Now write your own player class
class Player extends Characters{
    constructor(){
        super();

        this.sprite = 'images/char-cat-girl.png';
    }
    handleInput(input){
        if(input === "left"){
            this.x=this.x>0 ? this.x -1 : this.x;
        }else if(input === "right"){
            this.x=this.x<4 ? this.x +1 : this.x;
        }else if(input === "up"){
            this.y=this.y>0 ? this.y -1 : this.y;
        }else if(input === "down"){
            this.y=this.y<5 ? this.y +1 : this.y;
        }
    }
}

//display player
const player = new Player();

//display a bug 
const allEnemies = [new Enemy(0,.8),new Enemy(0,1.8),new Enemy(0,2.8) ];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
