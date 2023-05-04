document.body.style.margin   = 0
document.body.style.overflow = `hidden`

// Defining variables

// Defines the number of rotations
let symmetry = 8;

let angle;
let clearButton;
 
// The symmetry extends the whole 360 degrees of the canvas divided by the number rotations
angle = 360 / symmetry;

// Popup alert 
confirm('Click and drag mouse to draw');

function setup() {
// The canvas will automatically enlarge and shrink with the measurements of the webpage
// Minus the height of the clear button
  createCanvas(innerWidth, innerHeight - 26);
// All angles are in degrees
  angleMode(DEGREES);
// Fills background colour as black
  background('black');

// The button for clear screen
  clearButton = createButton('Clear');
// Clicking the button clears the screen
  clearButton.mousePressed(clearScreen);
}

// Function for clear screen
// Match with original background colour to set the screen back to a solid background
function clearScreen() {
  background('black');
}

function draw() {
// Specifies position of the subsequent draw functions - relocating the origin to the center of the canvas
// Over two ( / 2) ensures the width and height remain in the center of the canvas because it is halfway to the right and halfway from the top
  translate(width / 2, height / 2);
  
// Stating the conditions based on position of mouse
// (&& = logical and)
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    
// Defining mouse positions and previous mouse positions in order to draw a line between the two when the mouse is pressed. 
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
// Action repeats according to the number defined in variable symmetry
      for (let i = 0; i < symmetry; i++) {
// The draw will rotate 360 deg by the number of reflections defined in variable symmetry eg. 8 times
        rotate(angle);
// Line width of 5 pixels
        strokeWeight(5);
// Colour of the line
        stroke(rand_colour());
// Coordinates of where the line start and where it ends
// From the position of the mouse on the x- and y-axis to the previous position of the mouse
        line(mx, my, pmx, pmy);
// Push allows for a new state to be built upon the current style and transform accordingly - allowing for a continuous line drawing on the canvas 
        push();
// Inverts each rotation
        scale(1, -1);
        line(mx, my, pmx, pmy);
// Used in line with push
// Pop restores to the original state
        pop();
      }
    }
  }
}

// Function for rotating through colour parameters at random. 
function rand_colour () {
// Hue, Saturation and Brightness
  colorMode (HSB)
// Hue can be any random colour
  const h = random (360)
// Saturation at 50% 
  const s = 50
// Maximum brightness
  const b = 100
  return color (h, s, b)
}