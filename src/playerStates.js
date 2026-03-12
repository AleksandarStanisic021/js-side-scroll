
let statesEnum = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
    FALLING: 3
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
    }

    handleInput(input) {
        if (input.includes('ArrowLeft') || input.includes('ArrowRight')) {
            this.player.setState(statesEnum.RUNNING);
        }
    }
}
export class Running extends State {
    constructor(player) {
        super('RUNNING');
        this.player = player;

    }
    enter() {
        this.player.FrameY = 3;

    }
    handleInput(input) {
        if (input.includes('ArrowDown')) {
            this.player.setState(statesEnum.SITTING);
        }

    }
}