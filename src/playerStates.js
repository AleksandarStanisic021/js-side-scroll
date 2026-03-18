
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
    constructor(state) {
        this.state = state;
    }
}
export class Sitting extends State {
    constructor(player) {
        super('SITTING');
        this.player = player;
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
    constructor(player) {
        super('RUNNING');
        this.player = player;
    }
    enter() {
        this.player.maxFrame = 8;
        this.player.FrameY = 3;
    }

    handleInput(input) {
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
    constructor(player) {
        super('JUMPING');
        this.player = player;
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

    constructor(player) {
        super('FALLING');
        this.player = player;
    }
    enter() {
        this.player.FrameY = 2;
        this.player.maxFrame = 6;
    }
    handleInput(input) {
        if (this.player.onGround()) {
            this.player.setState(statesEnum.RUNNING, 1);
        }
    }
}

export class Rolling extends State {
    constructor(player) {
        super('ROLLING');
        this.player = player;
    }
    enter() {
        this.player.maxFrame = 6;
        this.player.FrameY = 6;
    }
    handleInput(input) {
        if (!input.includes('Enter') && this.player.onGround()) {
            this.player.setState(statesEnum.RUNNING, 1)
        } else if (!input.includes('Enter') && !this.player.onGround()) {
            this.player.setState(statesEnum.FALLING, 1)
        }
    }
}


