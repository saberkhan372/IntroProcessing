// Original AI-assisted Intro Java teaching example. Java mode.
void setup() {
  size(600, 240);
  background(23, 41, 36);
  fill(212, 243, 108);
  noStroke();
  for (int i = 0; i < 5; i++) {
    circle(spacedX(i, 60), 100, 20);
  }
}
float spacedX(int index, float gap) {
  return 40 + index * gap;
}
