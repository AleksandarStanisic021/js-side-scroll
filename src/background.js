import backgroundSrc1 from './assets/layer-1.png'
import backgroundSrc2 from './assets/layer-2.png'
import backgroundSrc3 from './assets/layer-3.png'
import backgroundSrc4 from './assets/layer-4.png'
import backgroundSrc5 from './assets/layer-5.png'

const background1 = new Image();
background1.src = backgroundSrc1;
const background2 = new Image();
background2.src = backgroundSrc2;
const background3 = new Image();
background3.src = backgroundSrc3;
const background4 = new Image();
background4.src = backgroundSrc4;
const background5 = new Image();
background5.src = backgroundSrc5;

export class Layer {
    constructor(game, width, height, speedModifier, image) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;

    }

    update() {
        if (this.x <= -this.width) this.x = 0;
        this.x -= this.game.speed * this.speedModifier;
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}
export class Background {
    constructor(game) {
        this.game = game;
        this.width = 1667;
        this.height = 500;
        this.layer5Image = background5;
        this.layer4Image = background4;
        this.layer3Image = background3;
        this.layer2Image = background2;
        this.layer1Image = background1;
        this.layer1 = new Layer(this.game, this.width, this.height, 0, this.layer1Image);
        this.layer2 = new Layer(this.game, this.width, this.height, .2, this.layer2Image);
        this.layer3 = new Layer(this.game, this.width, this.height, .3, this.layer3Image);
        this.layer4 = new Layer(this.game, this.width, this.height, .8, this.layer4Image);
        this.layer5 = new Layer(this.game, this.width, this.height, 10, this.layer5Image);
        this.layers = [this.layer1, this.layer2, this.layer3, this.layer4, this.layer5]
    }

    update() {
        this.layers.forEach(layer => layer.update());
    }
    draw(context) {
        this.layers.forEach(layer => layer.draw(context));
    }
}