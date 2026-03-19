import { Dust, Fire, Splash } from "./particle";


let statesEnum = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
    FALLING: 3,
    ROLLING: 4,
    DIVING: 5,
    HIT: 6,
}

class State {
    constructor(state, player) {
        this.state = state;
        this.player = player;
        this.game = player.game;
    }
}
export class Sitting extends State {
    constructor(game) {
        super('SITTING', game);
    }
    enter() {
        this.player.FrameY = 5;
        this.player.maxFrame = 4;
    }

    handleInput(input) {
        if (input.includes('ArrowLeft') || input.includes('ArrowRight')) {
            this.player.setState(statesEnum.RUNNING, 1);
        } else if (input.includes('Enter')) {
            this.player.setState(statesEnum.ROLLING, 2);
        }
    }
}
export class Running extends State {
    constructor(game) {
        super('RUNNING', game);

    }
    enter() {

        this.player.maxFrame = 8;
        this.player.FrameY = 3;
    }

    handleInput(input) {
        this.game.particles.push(new Dust(this.game, this.player.x + this.player.width / 2, this.player.y));
        if (input.includes('ArrowDown')) {
            this.player.setState(statesEnum.SITTING, 0);
        } else if (input.includes('ArrowUp')) {
            this.player.setState(statesEnum.JUMPING, 1);
        } else if (input.includes('Enter')) {
            this.player.setState(statesEnum.ROLLING, 2);
        }
    }
}

export class Jumping extends State {
    constructor(game) {
        super('JUMPING', game);

    }
    enter() {
        if (this.player.onGround()) this.player.vy -= 25;
        this.player.FrameY = 1;
        this.player.maxFrame = 6;
    }
    handleInput(input) {
        if (this.player.vy > this.player.velocityRight) {
            this.player.setState(statesEnum.FALLING, 1);
        } else if (input.includes('Enter') && !this.player.onGround()) {
            this.player.setState(statesEnum.ROLLING, 2);
        } else if (
            input.includes('Enter') && this.player.onGround()) {
            this.player.setState(statesEnum.RUNNING, 1);
        }
    }
}

export class Falling extends State {

    constructor(game) {
        super('FALLING', game);
    }
    enter() {
        this.player.FrameY = 2;
        this.player.maxFrame = 6;
    }
    handleInput(input) {
        if (this.player.onGround()) {
            this.player.setState(statesEnum.RUNNING, 1);
            this.game.particles.push(new Splash(this.game, this.player.x + this.player.width / 2 - 50, this.player.y - 50));
        }
    }
}

export class Rolling extends State {
    constructor(game) {
        super('ROLLING', game);

    }
    enter() {
        this.player.maxFrame = 6;
        this.player.FrameY = 6;
    }
    handleInput(input) {
        this.game.particles.push(new Fire(this.game, this.player.x + this.player.width / 2 - 50, this.player.y));
        if (!input.includes('Enter') && this.player.onGround()) {
            this.player.setState(statesEnum.RUNNING, 1)
        } else if (!input.includes('Enter') && !this.player.onGround()) {
            this.player.setState(statesEnum.FALLING, 1)
        }
    }
}


