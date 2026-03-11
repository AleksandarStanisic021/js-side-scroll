import dogImageSrc from './assets/player.png'
const dogImage = new Image();
dogImage.src = dogImageSrc;


export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.vy = 0;
        this.image = dogImage;
        this.speed = 0;
        this.maxSpeed = 10;
        this.velocityRight = 1;
    }

    update(input) {
        this.x += this.speed;
        if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;

        if (input.includes('ArrowUp') && this.onGround()) this.vy -= 30;
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.velocityRight;
        else this.vy = 0;
    }

    draw(context) {
        context.drawImage(this.image,
            0, 0,
            this.width,
            this.height,
            this.x, this.y,
            this.width,
            this.height);
    }
    onGround() { return this.y >= this.game.height - this.height; }
}





