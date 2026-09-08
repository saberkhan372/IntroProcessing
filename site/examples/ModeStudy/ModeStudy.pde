// Original AI-assisted Intro Java teaching example. Java mode.
int mode = 0; // 0: title, 1: play, 2: end
float x = 40;
void setup() { size(600, 240); }
void draw() {
  background(23, 41, 36);
  fill(212, 243, 108);
  textSize(20);
  if (mode == 0) {
    text("Click to start", 40, 100);
  } else if (mode == 1) {
    x += 2;
    noStroke(); circle(x, 120, 30);
    if (x > width + 15) mode = 2;
  } else {
    text("Finished. Release R to reset.", 40, 100);
  }
}
void mouseClicked() {
  if (mode == 0) mode = 1;
}
void keyReleased() {
  if (key == 'r' || key == 'R') resetWorld();
}
void resetWorld() {
  x = 40;
  mode = 0;
}
