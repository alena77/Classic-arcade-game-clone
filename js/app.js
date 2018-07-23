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
}

// Now write your own enemy class
class Enemy extends Characters{
    constructor(){
        super();
        this.sprite = 'images/enemy-bug.png';
    }
}

// Now write your own player class
class Player extends Characters{
    constructor(){
        super();
        this.sprite = 'images/char-cat-girl.png';
    }
}




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
