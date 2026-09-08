// Original teaching example, AI-assisted. Processing Java mode.
// No external assets or libraries. Save in a PopulationStudy folder.
Dot[] dots;
void setup() {
  size(600, 240);
  dots = new Dot[15];
  for (int i = 0; i < dots.length; i++) {
    dots[i] = new Dot(20 + i * 38, 1 + i * 0.1);
  }
}
void draw() {
  background(23, 41, 36);
  for (int i = 0; i < dots.length; i++) {
    dots[i].update();
    dots[i].display();
  }
}
class Dot {
  float x;
  float speed;
  Dot(float startX, float startSpeed) {
    x = startX;
    speed = startSpeed;
  }
  void update() {
    x += speed;
    if (x > width + 15) x = -15;
  }
  void display() {
    noStroke();
    fill(212, 243, 108);
    circle(x, height / 2, 30);
  }
}
