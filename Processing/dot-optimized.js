class Dot {

  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.size = 5;
    this.color = {
      r: 100,
      g: 100,
      b: 100
    }
    this.deltaX = random(-0.5, 0.5);
    this.deltaY = random(-0.5, 0.5);
  }

  checkEdges() {
    if (this.x > width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = height;
    }
  }

  update() {
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

  show() {
    stroke(0);
    fill(this.color.r, this.color.g, this.color.b);
    this.checkEdges();
    this.update();
    ellipse(this.x, this.y, this.size, this.size);
  }
}
