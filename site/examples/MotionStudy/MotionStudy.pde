// Original teaching example for the Intro Java site mockup.
// Processing Java mode; no external libraries or assets.
float x = 40;
float speed = 2;

void setup() {
  size(600, 240);
}

void draw() {
  background(23, 41, 36);
  x = x + speed;
  if (x > width + 15) {
    x = -15;
  }
  fill(212, 243, 108);
  noStroke();
  circle(x, height / 2, 30);
}
