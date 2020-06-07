let x = 0;
let y = 0;

let x_spacing = 20;
let y_spacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
}

function draw() {
  let num = random(1);
  
  if (num < 0.3) {
    stroke(0, 255, 0, 150);
    strokeWeight(10);
    line(x, y, x + x_spacing, y + y_spacing);
  } 
  else {
    
  }

  let another_num = random(1);
  
  if (another_num < 0.2) {
    noStroke();
    fill(255, 0, 0, 120);
    circle(x, y, 10)
  }

  x = x + x_spacing;
  if (x > width) {
    x = 0;
    y = y + y_spacing;
  }
  
}