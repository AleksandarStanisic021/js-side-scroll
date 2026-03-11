
export class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key)
        console.log(this.keys);
      }
    })
    window.addEventListener(('keyup'), (e) => {
      if (e.key === 'ArrowDown') {
        this.keys.splice(this.keys.indexOf(e.key, 1));
      }
    })
    window.addEventListener('keydown', (e) => {

      if (e.key === 'ArrowUp' && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key)
      }
    })
    window.addEventListener(('keyup'), (e) => {
      if (e.key === 'ArrowUp') {
        this.keys.splice(this.keys.indexOf(e.key, 1));
      }
    })
    window.addEventListener('keydown', (e) => {

      if (e.key === 'ArrowLeft' && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key)

      }
    })
    window.addEventListener(('keyup'), (e) => {
      if (e.key === 'ArrowLeft') {
        this.keys.splice(this.keys.indexOf(e.key, 1));
      }
    })
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key)
      }
    })
    window.addEventListener(('keyup'), (e) => {
      if (e.key === 'ArrowRight') {
        this.keys.splice(this.keys.indexOf(e.key, 1));
      }
    })
  }//constructor
}//class
