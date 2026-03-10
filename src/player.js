import dogImageSrc from './assets/player.png'
const dogImage = new Image();
dogImage.src = dogImageSrc;




export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = 100;
    }

    update() { }

    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }

}




