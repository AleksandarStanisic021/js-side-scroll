import enemy1Src from './assets/enemy_fly.png'
import enemy2Src from './assets/enemy_plant.png'
import enemy3Src from './assets/enemy_spider.png'



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
    update() {
    }
    draw() {
    }
}

export class FlyingEnemy extends Enemy {
    constructor() {
        super();
        this.width = 60;
        this.height = 44;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.directionX = Math.random() * 5 + 1;
        this.directionY = Math.random();
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






