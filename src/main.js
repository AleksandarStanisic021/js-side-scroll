import './assets/style.css'
import { Player } from './player.js';
import { InputHandler } from './input.js'



const canvas1 = document.getElementById('canvas1')
canvas1.width = 500;
canvas1.height = 500;
const ctx = canvas1.getContext('2d')

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.player = new Player(this);
    this.input = new InputHandler();
  }
  update(deltaTime) {
    this.player.update(this.input.keys, deltaTime);
  }

  draw(context) {
    this.player.draw(context);
  }
}

let game = new Game(canvas1.width, canvas1.height);

let lastFrameTime = 0
function animate(timeStamp) {
  let deltaTime = timeStamp - lastFrameTime;
  lastFrameTime = timeStamp;

  ctx.clearRect(0, 0, canvas1.width, canvas1.height);
  game.update(deltaTime);
  game.draw(ctx);

  window.requestAnimationFrame(animate);
}
animate(0);