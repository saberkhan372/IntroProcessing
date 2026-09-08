// Original AI-assisted Intro Java teaching example. Java mode.
Dot first;
Dot second;
void setup() {
  size(600, 240);
  first = new Dot(40, 1);
  second = new Dot(120, 3);
}
void draw() {
  background(23, 41, 36);
  first.update(); first.display();
  second.update(); second.display();
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
    noStroke(); fill(212, 243, 108);
    circle(x, height / 2, 30);
  }
}
