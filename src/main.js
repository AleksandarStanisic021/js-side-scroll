import './assets/style.css'


const canvas1 = document.getElementById('canvas1')
canvas1.width = 500;
canvas1.height = 500;
const ctx = canvas1.getContext('2d')

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;


  }
  update() { }
  draw() { }
}


