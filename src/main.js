import './assets/style.css'
import { Player } from './player.js';


const canvas1 = document.getElementById('canvas1')
canvas1.width = 500;
canvas1.height = 500;
const ctx = canvas1.getContext('2d')

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.player = new Player(this);
  }
  update() {
    this.player.update();
  }

  draw(context) {

    this.player.draw(context);
  }
}

let g = new Game(canvas1.width, canvas1.height);


function animate() {
  ctx.clearRect(0, 0, canvas1.width, canvas1.height);
  g.update();
  g.draw(ctx);

  window.requestAnimationFrame(animate);
}
animate(0);