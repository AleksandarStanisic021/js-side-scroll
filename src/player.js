import dogImageSrc from './assets/player.png'
const dogImage = new Image();
dogImage.src = dogImageSrc;




export class Player {
    constructor(game) {
        this.game = game;
        this.image = dogImage;
    }
}

