let step = -1; 
let circles = [];
let start = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  frameRate(0.5);
  textFont("Times New Roman");
  textSize(24);
  fill(255);
  textAlign(CENTER, CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (step == -1) {
  //it is constant, fix it
  textSize(24);
  text("Press s to start. TW/CW: Death/Su!cide", width / 2, height / 2);
  }
  
//   if (keyIsPressed) {
//     let step = 0;
//   }
  
//   else {
//     let step = -2;
//   }
  
  if (start) {
    if (step == -1) {
      background(0);
    }
    
    else if (step == 0) {
      // colored circle 1
      //let col = color(random(255), random(255), random(255));
      //does not show, fix it
      fill(random(20,235), random(20,235), random(20,235),190);
      ellipse(width / 4, height / 2, 200, 200);
    } 

    else if (step == 1) {
      // circle turn grey
      fill(127);
      ellipse(width / 4, height / 2, 200, 200);
    } 

    else if (step == 2) {
      // colored circle 2
      //let col = color(random(255), random(255), random(255));
      fill(random(20,235), random(20,235), random(20,235),190);
      ellipse((3 * width) / 4, height / 2, 200, 200);
    }

    else if (step == 3) {
      // circle 2 turns grey
      fill(127);
      ellipse((3 * width) / 4, height / 2, 200, 200);
    } 

    else if (step == 4) {
      // black screen
      background(0);
    } 

    else if (step == 5) {
      // sentence
      fill(255);
      textSize(24);
      text("How much does it hurt to lose a loved one?", width / 2, height / 2);
    } 

    else if (step == 6) {
      // black screen
      background(0);
    } 

    else if (step == 7) {
      // tons of colored circles
      frameRate(0.2);
      for (let i = 0; i < 21249; i++) {
        let col;
        if (i < 3) {
          // 3 circles remain white
          col = color(255);
        } else if (i == 3) {
          // 1 circle remains grey
          col = color(127);
        } else if (i == 4) {
          // 1 circle remains black
          col = color(0);
        } else {
          // other colored circles
          col = color(random(20,235), random(20,235), random(20,235),190);
        }
        circles.push({ x: random(width), y: random(height), color: col });
      }
      for (let circle of circles) {
        fill(circle.color);
        ellipse(circle.x, circle.y, 20, 20);
      }
    } 

    else if (step == 8) {
      // black screen
      frameRate(0.5);
      background(0);
    } 

    else if (step == 9) {
      // sentence 2 
      fill(255);
      textSize(24);
      text("Did you feel it?", width / 2, height / 2 - 100);
      text("The life of the city?", width / 2, height / 2 - 70);
      text("Or the grief of the families?", width / 2, height / 2 - 40);
    }

    else if (step == 10) {
      // explanation paragraph
      textSize(16);
      text("All the colored circles represented a youth's life.", width / 2, height / 2 - 0);
      text("In the previous screen, there were 3 solid greys, 1 solid black, and 1 solid white.", width / 2, height / 2 + 20);
    }

    else if (step == 11) {
      // explanation paragraph
      textSize(16);
      text("Greys represent unintentional deaths,", width / 2, height / 2 + 50);
      text("black represents suicide,", width / 2, height / 2 + 70);
      text("and white represents homicide.", width / 2, height / 2 + 90);
      text("These are the young lives we lost in 2020, Walla Walla.", width / 2, height / 2 + 110);
    } 

    else if (step == 12) {
      // instruction
      textSize(12);
      text("Press r to restart the animation.", width / 2, height / 2 + 200);
    }

    // increment step when key is pressed at the beginnning

      step++;

  }
}

function keyPressed() {
  if (key === 's') {
  start = true
}
  if (key === 'r') {
  step = -1; 
  circles = [];
  start = false;
  background(0);
}
}

