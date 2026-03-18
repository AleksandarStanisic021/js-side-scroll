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
    this.score = 0;
    this.width = width;
    this.height = height;
    this.player = new Player(this);
    this.input = new InputHandler(this);
    this.speed = 1;
    this.background = new Background(this);
    //this.groundMargin = 5;
    this.enemies = [];
    this.enemyTimer = 0;
    this.enemyInterval = 1500;
    this.debug = false;
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
      if (enemy.markedForDeletion) this.enemies.splice(this.enemies.indexOf(enemy), 1);
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
    if (this.speed > 0 && Math.random() < 0.5)
      this.enemies.push(new GroundEnemy(this));

    if (this.speed > 0)
      this.enemies.push(new FlyingEnemy(this));

    if (this.speed > 0 && Math.random() < 0.5)
      this.enemies.push(new ClimbingEnemy(this));
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