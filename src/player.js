import dogImageSrc from './assets/player.png'
import { Sitting } from './playerStates.js';
import { Running } from './playerStates.js';
import { Jumping } from './playerStates.js';
import { Falling } from './playerStates.js';



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
        this.FrameX = 0;
        this.FrameY = 0;
        this.speed = 0;
        this.maxSpeed = 10;
        this.velocityRight = 1;
        this.states = [new Sitting(this), new Running(this), new Jumping(this), new Falling(this)]
        this.currentState = this.states[0];
        this.currentState.enter();
    }

    update(input) {
        this.currentState.handleInput(input);
        this.x += this.speed;
        if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;

        // if (input.includes('ArrowUp') && this.onGround()) this.vy -= 30;
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.velocityRight;
        else this.vy = 0;
    }

    draw(context) {
        context.drawImage(this.image,
            this.FrameX * this.width,
            this.FrameY * this.height,
            this.width,
            this.height,
            this.x, this.y,
            this.width,
            this.height);
    }
    onGround() { return this.y >= this.game.height - this.height; }

    setState(state) {
        // `state` is an index from the states enum; map to the state instance
        this.currentState = this.states[state];
        if (this.currentState && typeof this.currentState.enter === 'function') {
            this.currentState.enter();
        }
    }
}





