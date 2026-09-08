// Original AI-assisted teaching example. Processing Java mode.
// No libraries or assets required. Not yet executed in Processing.
float x = 40;
void setup() {
  size(600, 240);
}
void draw() {
  background(23, 41, 36);
  if (keyPressed) x = x + 2;
  if (x > width + 15) x = -15;
  fill(212, 243, 108);
  noStroke();
  circle(x, height / 2, 30);
}
void keyReleased() {
  if (key == 'r' || key == 'R') x = 40;
}
