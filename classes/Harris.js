export class Harris {
  constructor(x, y) {
    this.image = document.querySelector('img[alt="harris"]');
    this.position = { x: x - this.image.width / 2, y: y - this.image.height / 2 };
    this.velocity = { x: 0, y: 100 };
  }

  update(time, context) {
    this.position.x += this.velocity.x * time.secondsPassed;
    this.position.y += this.velocity.y * time.secondsPassed;

    if (this.position.y + this.image.height >= context.canvas.height) {
      this.velocity.y *= -1;
    }
  }

  draw(context) {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}
