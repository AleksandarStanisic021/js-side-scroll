
const statesEnum = {
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

    }
    handleInput(input) {

    }
    update() {

    }
    draw(context) {

    }
}

export class Running extends State {
    constructor(player) {
        super('RUNNING');
        this.player = player;
    }
    enter() {

    }
    handleInput(input) {

    }
    update() {

    }
    draw(context) {

    }
}

export class Jumping extends State {
    constructor(player) {
        super('JUMPING');
        this.player = player;
    }
    enter() {

    }
    handleInput(input) {

    }
    update() {

    }
    draw(context) {

    }

}










