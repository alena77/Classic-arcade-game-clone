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
        this.sprite = (Math.round(Math.random())===0 ? 'images/enemy-bug.png' : 'images/Rock.png');
        this.x=x;
        this.y=y;
        this.randSpeed=Math.random()*3+1;
    }
    update(dt){
        super.update();
        if(this.onCanvasX){
            this.x=this.x-6;
            //generate a random speed increase
            this.randSpeed = Math.random()*3+1; 
            //switch up the enemy
            this.sprite = (Math.round(Math.random())===0 ? 'images/enemy-bug.png' : 'images/Rock.png');
        }else{
            //move your enemy on canvas
            this.x = this.x+dt*this.randSpeed;
            //ctx.rotate(4*Math.PI/180);
        }
    }
    checkCollisions(player){
        //console.log(this.y+" "+(player.y-0.2));

        if(this.y=== player.y -.2){
            //console.log("they do collide yy");
            //&& this.x<=(player.x +.5))
            //this.x>=(player.x - .5)
            if(this.x<=(player.x +.5)&& this.x>=(player.x - .5)) {
                //console.log("they do collide xx");
                //next line plays clap sound
                document.querySelector(".clap").play();
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
        this.win = false;
        this.moving=false;
    }
    handleInput(input){
        //next line plays boom sound
        document.querySelector(".tink").play();
        if(input === "left"){
            this.x=this.x>0 ? this.x -1 : this.x;
        }else if(input === "right"){
            this.x=this.x<4 ? this.x +1 : this.x;
        }else if(input === "up"){
            this.y=this.y>0 ? this.y -1 : this.y;
        }else if(input === "down"){
            this.y=this.y<5 ? this.y +1 : this.y;
        }
        this.moving = true;
    }

    //checks if movement is finished before anouncing win
    render(){
        super.render();
        this.moving=false;
    }

    //method that checks for win
    update(dt){
        super.update();
        if(!this.win && this.onCanvasY && !this.moving){
            alert("You win!");
            this.win = true;
            this.dt=0;
        }
    }
}

//display player
const player = new Player();

//display a bug OR a rock!
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
