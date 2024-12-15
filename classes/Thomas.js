export class Thomas {
  constructor(x, y) {
    this.image = document.querySelector('img[alt="thomas"]');
    this.position = { x: x - this.image.width / 2, y: y - this.image.height / 2 };
    this.velocity = { x: parseInt(Math.random() * 100), y: parseInt(Math.random() * 100) };
    this.rotation = 360;
    this.scale = { min: 1.0, max: 2.0, value: 1.0, dir: 1.0 };
  }

  update(time, context) {
    this.position.x += this.velocity.x * time.secondsPassed;
    this.position.y += this.velocity.y * time.secondsPassed;
    this.rotation -= 0.25;

    this.scale.value += this.scale.dir * 0.02;
    if (this.scale.value <= this.scale.min || this.scale.value >= this.scale.max) {
      this.scale.dir = -this.scale.dir;
    }
  }

  draw(context) {
    context.save();
    context.translate(this.position.x + this.image.width / 2, this.position.y + this.image.height / 2);
    context.rotate(parseInt(this.rotation) * (Math.PI / 180));
    context.scale(this.scale.value, this.scale.value);
    context.drawImage(this.image, -(this.image.width / 2), -(this.image.height / 2));
    context.restore();
  }
}
