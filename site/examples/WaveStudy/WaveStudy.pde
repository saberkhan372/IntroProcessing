// Original AI-assisted Intro Java teaching example. Java mode.
float angle = 0;
float amplitude = 50;
void setup() { size(600, 240); }
void draw() {
  background(23, 41, 36);
  float y = height / 2 + amplitude * sin(angle);
  angle += 0.03;
  noStroke(); fill(212, 243, 108);
  circle(width / 2, y, 30);
}
