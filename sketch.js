let thickness = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#170033');
}

function draw() {
  background('#170033');

  let maxAngle = PI / 6; // Maximum swing angle
  let angle = maxAngle * sin(frameCount * 0.02); // Overall swing motion
  let bottomY = height; // Bottom of the line

  for (let y = bottomY; y > 0; y--) {
    let progress = (height - y) / height; // Progress from bottom (0) to top (1)
    let swingOffset = 200 * progress * sin(angle); // Swing effect decreases closer to the bottom

    let x = width / 2 + swingOffset; // X position for the line
    strokeWeight(thickness); // Consistent thickness
    stroke(255); // Line color (white)
    line(x, y, x + thickness, y); // The line has a thickness of 10
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#170033');
}