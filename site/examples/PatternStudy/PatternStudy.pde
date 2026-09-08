// Original AI-assisted Intro Java teaching example. Java mode.
int count = 5;
float gap = 60;
void setup() {
  size(600, 240);
  background(23, 41, 36);
  fill(212, 243, 108);
  noStroke();
  for (int i = 0; i < count; i++) {
    circle(40 + i * gap, 100, 20);
  }
}
