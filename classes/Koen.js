export class Koen {
  constructor(x, y) {
    this.image = document.querySelector('img[alt="koen"]');

    this.position = { x, y };
    this.position.x -= this.image.width / 2;
    this.position.y -= this.image.height / 2;

    this.velocity = { x: parseInt(Math.random() * 100), y: parseInt(Math.random() * 100) };

    this.rotation = 0;
  }

  update(time, context) {
    this.position.x += this.velocity.x * time.secondsPassed;
    this.position.y += this.velocity.y * time.secondsPassed;
    this.rotation++;
  }

  draw(context) {
    context.save();
    context.translate(this.position.x + this.image.width / 2, this.position.y + this.image.height / 2);
    context.rotate(this.rotation * (Math.PI / 180));
    context.drawImage(this.image, -(this.image.width / 2), -(this.image.height / 2));
    context.restore();
  }
}
