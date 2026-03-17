import './assets/style.css'
import { Player } from './player.js';
import { InputHandler } from './input.js'
import { Background } from './background.js'
import { FlyingEnemy, GroundEnemy, ClimbingEnemy } from './enemy.js'





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
    this.speed = 1;
    this.background = new Background(this);
    //this.groundMargin = 5;
    this.enemies = [];
    this.enemyTimer = 0;
    this.enemyInterval = 1000;
  }
  update(deltaTime) {
    this.background.update();
    this.player.update(this.input.keys, deltaTime);
    if (this.enemyTimer > this.enemyInterval) {
      this.addEnemy();
      this.enemyTimer = 0;
    } else {
      this.enemyTimer += deltaTime;
    }
    this.enemies.forEach(enemy => {
      enemy.update(deltaTime);
    });
  }

  draw(context) {
    this.background.draw(context);
    this.player.draw(context);
    this.enemies.forEach(enemy => {
      enemy.draw(context);

    });
  }

  addEnemy() {
    this.enemies.push(new FlyingEnemy(this));


  }
}

let game = new Game(canvas1.width, canvas1.height);
let enemyFly = new FlyingEnemy(game);


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