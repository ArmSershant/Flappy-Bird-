import { Tools } from "./Tools.js"
import { Hero } from "./Hero.js"
import { Grid } from "./Grid.js"
export class Game {
  bird = new Hero()
  grid = new Grid()
  interval = null
  constructor() {
    document.body.onkeydown = (e) => {
      if (e.code === "Space") {
        e.preventDefault()
        this.bird.direction = "up"
        this.bird.activePhoto = 1 - this.bird.activePhoto
      }
    }
  }
  play() {
    console.log("Game started...")
    this.interval = setInterval(() => {
      Tools.ctx.clearRect(0, 0, 1200, 600)
      this.bird.move()
      this.grid.move()
      this.conflict()
    }, 75)
    this.bird.draw()
  }
  conflict() {
    let x1 = this.bird.x
    let y1 = this.bird.y
    this.grid.pipes.forEach((elm) => {
      let x2 = elm.x
      let y2 = elm.y
      if (x1 > x2 && x1 < x2 + elm.w) {
        if (y1 > y2 && y1 < y2 + elm.h) {
          this.over()
        }
      }
    })
  }
  over() {
    console.log("Game Over")
    clearInterval(this.interval)
    Tools.ctx.clearRect(0, 0, 1200, 600)
    Tools.ctx.globalCompositeOperation = "xor"
    Tools.ctx.font = "100px Tahoma"
    Tools.ctx.fillStyle = "red"
    Tools.ctx.fillText("GAME OVER", 320, 300)
  }
}

