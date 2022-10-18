import { Tools } from "./Tools.js"
export class Grid {
  pipes = []
  pipe = new Image()
  pipeRev = new Image()
  constructor() {
    for (let i = 0; i < 24; i++) {
      let x = 300 + 60 * i
      let h = 140 + Tools.getRandomNumber(125)
      let y = i % 2 == 0 ? 0 : 600 - h
      this.pipes.push({
        w: 200,
        h,
        x,
        y,
      })
    }
    this.pipe.src = "images/pipe.png"
    this.pipeRev.src = "images/pipe-reversed.png"
  }

  draw() {
    this.pipes.forEach((elm) => {
      if (elm.y > 300) {
        Tools.ctx.drawImage(this.pipe, elm.x, elm.y, elm.w, elm.h)
      }
      if (elm.y < 300) {
        Tools.ctx.drawImage(this.pipeRev, elm.x, elm.y, elm.w, elm.h)
      }
    })
  }

  move() {
    this.pipes.forEach((elm, i) => {
      elm.x -= 20
      if (elm.x < 0) {
        elm.x = 1300
        elm.h = 140 + Tools.getRandomNumber(125)
        elm.y = i % 2 == 0 ? 0 : 600 - elm.h
      }
    })
    this.draw()
  }
}

