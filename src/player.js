import dogImageSrc from './assets/player.png'
import { Sitting } from './playerStates.js';
import { Running } from './playerStates.js';
import { Jumping } from './playerStates.js';
import { Falling } from './playerStates.js';
import { Rolling } from './playerStates.js';
import { Hit } from './playerStates.js';



const dogImage = new Image();
dogImage.src = dogImageSrc;


export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height - 50
        this.vy = 0;
        this.image = dogImage;
        this.FrameX = 0;
        this.FrameY = 0;
        this.speed = 0;
        this.maxSpeed = 10;
        this.maxFrame = 5;
        this.timer = 0;
        this.delay = 50;
        this.currentFrame = 0;
        this.velocityRight = 1;
        this.states = [new Sitting(this),
        new Running(this),
        new Jumping(this),
        new Falling(this),
        new Rolling(this),
        new Hit(this)]
        this.currentState = this.states[0];
        this.currentState.enter();
        //        console.log(this.y);  
    }

    update(input, deltaTime) {
        this.checkCollision();
        this.currentState.handleInput(input);
        this.x += this.speed;
        if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;

        // if (input.includes('ArrowUp') && this.onGround()) this.vy -= 30;
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.velocityRight;
        else this.vy = 0;

        if (this.timer > this.delay) {
            this.timer = 0;
            if (this.FrameX < this.maxFrame) this.FrameX++;
            else this.FrameX = 0;
        } else {
            this.timer += deltaTime;
        }
    }

    draw(context) {
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image,
            this.FrameX * this.width,
            this.FrameY * this.height,
            this.width,
            this.height,
            this.x, this.y,
            this.width,
            this.height);
    }
    onGround() {
        return this.y >= this.game.height - this.height - 50
    }

    setState(state, speed) {
        // `state` is an index from the states enum; map to the state instance
        this.currentState = this.states[state];
        this.game.speed = speed;
        if (this.currentState && typeof this.currentState.enter === 'function') {
            this.currentState.enter();
        }
    }
    checkCollision() {
        this.game.enemies.forEach(enemy => {
            if (enemy.x < this.x + this.width && enemy.x + enemy.width > this.x && enemy.y < this.y + this.height && enemy.y + enemy.height > this.y) {
                enemy.markedForDeletion = true;
                if (this.currentState === this.states[4] || this.currentState === this.states[2]) {
                    this.game.score++;
                } else {
                    this.setState(5, 0);
                    this.game.score -= 1;

                }
            }
        }
        )
    }

}





