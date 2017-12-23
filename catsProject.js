var img0;
var img1;

function preload() {
  img0 = loadImage("assets/rockies.jpg");
  img1 = loadImage("assets/bricks_third.jpg");
}

function setup() {
  background(img0);
  image(img1, 0, 0);
  blend(img1, 0, 0, 33, 100, 67, 0, 33, 100, LIGHTEST);
}

