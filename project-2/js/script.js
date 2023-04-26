let gridSizeSlider;
let invertCheckbox;
let erodeCheckbox;
let dilateCheckbox;

let rSlider, gSlider, bSlider, aSlider;

let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  gridSizeSlider = createSlider(10, 50, 10);
  gridSizeSlider.position(10, 10);
  
  invertCheckbox = createCheckbox('INVERT', false);
  invertCheckbox.position(10, 120);
  erodeCheckbox = createCheckbox('ERODE', false);
  erodeCheckbox.position(10, 140);
  dilateCheckbox = createCheckbox('ERODE', false);
  dilateCheckbox.position(10, 160);
  
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  
  rSlider = createSlider(0, 255, 194);
  rSlider.position(10, 30);

  gSlider = createSlider(0, 255, 255);
  gSlider.position(10, 50);

  bSlider = createSlider(0, 255, 87);
  bSlider.position(10, 70);

  aSlider = createSlider(0, 255, 255);
  aSlider.position(10, 90);
  
  
  button = createButton('SCREENSHOT');
  button.position(10, 200);
  button.mousePressed(screenshot);
  
}

function draw() {
  background('#D9D9D9');
  
  let gridSize = gridSizeSlider.value();
  
  video.loadPixels();
  for (let y=0; y<video.height; y+=gridSize) {
    for (let x=0; x<video.width; x+=gridSize) {
      let index = (y * video.width + x) * 4;
      let r = video.pixels[index];
      let dia = map(r, 0, 255, gridSize, 2);
         
      fill('#C2FF57');
      // stroke(150);
      stroke('#0726D2');
      strokeWeight(1);
      
      fill(239,239,239,255);
      rect(10, 119, 84, 62);


      let fillColor = color(rSlider.value(), gSlider.value(), bSlider.value(), aSlider.value());

      fill(fillColor);
      
      rect(x, y + r / 10, r / 3, gridSize * 2 / 3);
      rect(x, y + gridSize - gridSize / 2, gridSize, r / 10);

      circle(x + gridSize / 2, y + gridSize / 2, dia);
    }
  }
  
  if (invertCheckbox.checked()) {
    filter(INVERT);
  }
  if (erodeCheckbox.checked()) {
    filter(ERODE);
  }
  if (dilateCheckbox.checked()) {
    filter(DILATE);
  }
}

function screenshot() {
  saveCanvas("dotFilter" + ".jpg");
}
