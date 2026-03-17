import enemy1Src from './assets/enemy_fly.png'
import enemy2Src from './assets/enemy_plant.png'
import enemy3Src from './assets/enemy_spider_big.png'

const enemy_Fly = new Image();
enemy_Fly.src = enemy1Src;
const enemy_Plant = new Image();
enemy_Plant.src = enemy2Src;
const enemy_Spider = new Image();
enemy_Spider.src = enemy3Src;

class Enemy {
    constructor() {
        this.FrameX = 0;
        this.FrameY = 0;
        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;
    }
    update(deltaTime) {
        this.x -= this.speedX;
        this.y += this.speedY;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.FrameX < this.maxFrame) this.FrameX++;
            else this.FrameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }

    }
    draw(context) {
        context.drawImage(this.image,
            this.FrameX * this.width,
            0,
            this.width,
            this.height,
            this.x, this.y,
            this.width,
            this.height);
    }
}

export class FlyingEnemy extends Enemy {
    constructor(game) {
        super();
        this.game = game;
        this.width = 60;
        this.height = 44;
        this.x = this.game.width;
        this.y = 200;
        this.speedX = 2;
        this.speedY = 0;
        this.maxFrame = 5;
        this.image = enemy_Fly;
    }
    update(deltaTime) {
        super.update(deltaTime);
        if (this.x < 0 - this.width) this.markedForDeletion = true
    }
}

export class GroundEnemy extends Enemy {
    constructor() {
        super();
        this.width = 60;
        this.height = 87;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = canvas.height - this.height;
        this.directionX = 0;
        this.directionY = 0;
    }
}

export class ClimbingEnemy extends Enemy {
    constructor() { }
}






