import dogImageSrc from './assets/player.png'
const dogImage = new Image();
dogImage.src = dogImageSrc;




export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = dogImage;
    }

    update() { }

    draw(context) {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image,
            0, 0,
            this.width,
            this.height,
            0, this.game.height - this.height,
            this.width,
            this.height);
    }

}




