import { Tools } from "./Tools.js"
export class Hero {
  x = 100
  y = 300
  w = 40
  h = 40
  direction = "down"
  photos = ["images/flappy-up.png", "images/flappy-down.png"]
  activePhoto = 1
  draw() {
    let img = new Image()
    img.src = this.photos[this.activePhoto]
    img.onload = () => Tools.ctx.drawImage(img, this.x, this.y, this.w, this.h)
  }
  move() {
    if (this.direction == "down") {
      this.activePhoto = 1
      this.y += 10
      if (this.y > 575) {
        this.y = 575
      }
      if (this.y < 20) {
        this.y = 15
      }
    } else if (this.direction == "up") {
      this.img = this.imgup
      this.y -= 70
      this.direction = "down"
    }
    this.draw()
  }
}

