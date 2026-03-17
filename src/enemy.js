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
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.FrameX < this.maxFrame) this.FrameX++;
            else this.FrameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        if (this.x + this.width < 0) this.markedForDeletion = true;

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
        this.x = this.game.width + Math.random() * this.game.width - this.width;
        this.y = Math.random() * (this.game.height - this.height) - Math.random() * Math.sin(this.x) * 50 - 80;
        this.speedX = 2;
        this.speedY = 0;
        this.maxFrame = 5;
        this.image = enemy_Fly;
        this.angle = 0;
        this.va = Math.random() * 0.1 + 0.1;
    }
    update(deltaTime) {
        super.update(deltaTime);
        this.angle += this.va;
        this.y += Math.sin(this.angle);

    }
}

export class GroundEnemy extends Enemy {
    constructor(game) {
        super();
        this.game = game;
        this.width = 60;
        this.height = 87;
        this.x = this.game.width + Math.random() * this.game.width - this.width;
        this.y = this.game.height - this.height - 80;
        this.speedX = 0;
        this.speedY = 0;
        this.maxFrame = 1;
        this.image = enemy_Plant;
    }

}

export class ClimbingEnemy extends Enemy {
    constructor(game) {
        super();
        this.game = game;
        this.width = 120;
        this.height = 144;
        this.x = this.game.width;
        this.y = Math.random() * this.game.height * 0.5;
        this.image = enemy_Spider;
        this.speedX = 0;
        this.speedY = Math.random() > 0.5 ? 1 : -1;
        this.maxFrame = 5;
        this.frameY = Math.floor(Math.random() * 3);

    }
    update(deltaTime) {
        super.update(deltaTime);
        if (this.y > this.game.height - this.height - 80) this.speedY *= -1;
        if (this.y < -this.height) this.markedForDeletion = true;
    }
    draw(context) {
        super.draw(context);
        context.beginPath();
        context.moveTo(this.x + this.width / 2, 0);
        context.lineTo(this.x + this.width / 2, this.y + 50);
        context.stroke();
    }

}






