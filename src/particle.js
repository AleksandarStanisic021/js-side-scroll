import FireSrc from './assets/fire.png'

const FireImg = new Image();
FireImg.src = FireSrc;

class Particle {
    constructor(game) {
        this.game = game;
        this.markedForDeletion = false;
    }
    update() {
        this.x -= this.speedX + this.game.speed;
        this.y -= this.speedY;
        this.size *= 0.95;
        if (this.size < 0.5) this.markedForDeletion = true;
    }
}
export class Dust extends Particle {
    constructor(game, x, y) {
        super(game);
        this.size = Math.random() * 10 + 10;
        this.x = x + -25;
        this.y = y + 60;
        this.speedX = Math.random();
        this.speedY = Math.random();
        this.color = 'rgba(25, 28, 25, 0.2)';
    }
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
    }
}

export class Splash extends Particle {
    constructor(game, x, y) {
        super(game);
        this.size = Math.random() * 100 + 200;
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 2 + 2;
        this.gravity = 0;
        this.image = FireImg;

    }
    update() {
        super.update();
        this.gravity += 0.1;
        this.y += this.gravity;
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.size, this.size)
    }
}
export class Fire extends Particle {
    constructor(game, x, y) {
        super(game);
        this.image = FireImg;
        this.size = Math.random() * 100 + 50;
        this.x = x;
        this.y = y;
        this.speedX = 1;
        this.speedY = 1;
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
    update() {
        super.update();
    }
}

