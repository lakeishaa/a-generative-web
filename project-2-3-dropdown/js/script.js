let gridSizeSlider;
let invertCheckbox;
let sel;

let button;

let checkbox1, checkbox2, checkbox3;
let video;


function setup() {  
  let canvas = createCanvas(windowWidth, windowHeight-38);
  canvas.position(0, 38);

  gridSizeSlider = createSlider(10, 90, 10);
  gridSizeSlider.position(10, 10);
  gridSizeSlider.style('width', '100px'); // set the width of the slider
  gridSizeSlider.style('height', '10px'); // set the height of the slider track
  gridSizeSlider.style('background-color', 'gray'); // set the color of the slider track
  gridSizeSlider.style('outline', 'none'); // remove the outline of the slider thumb
  // gridSizeSlider.style('border-radius', '5px'); // round the corners of the slider track
  gridSizeSlider.style('appearance', 'none'); // remove the default appearance of the slider thumb
  gridSizeSlider.style('::-webkit-slider-thumb', 'background-color: white'); // set the color of the slider thumb for WebKit browsers (Chrome, Safari, etc.)
  gridSizeSlider.style('::-moz-range-thumb', 'background-color: white'); // set the color of the slider thumb for Firefox

  // change the color of the slider thumb
  gridSizeSlider.style('::-webkit-slider-thumb', 'background-color: red !important');
  gridSizeSlider.style('::-moz-range-thumb', 'background-color: red !important');

  
  invertCheckbox = createCheckbox(' INVERT', false);
  invertCheckbox.position(280, 5);
  // invertCheckbox.style('color', '#31E638');
  // invertCheckbox.style('background-color', '#343434'); 
  invertCheckbox.style('border', 'none'); 
  invertCheckbox.style('outline','none'); 
  invertCheckbox.style('height','20px');
  invertCheckbox.style('width','80px');
  invertCheckbox.style('line-height', '1.5em');
  invertCheckbox.style('font-family', 'helvetica');
  invertCheckbox.style('color', '#343434');
  invertCheckbox.style('background-color', '#31E638');
  invertCheckbox.style('padding', '3px');
  invertCheckbox.style('font-size', '15px');

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  button = createButton('SCREENSHOT');
  // button.position(width - button.width - 30, 10);
  button.position((windowWidth-150), 5);
  button.mousePressed(screenshot);
  button.style('background-color', '#31E638');
  button.style('color', '#343434');
  // button.style('background-color', '#31E638'); 
  // button.style('border', 'none'); 
  // button.style('outline','none'); 
  // button.style('height','38px');
  // button.style('width','200px');
  button.style('padding', '3px');
  button.style('font-size', '15px');

  
  sel = createSelect();
  sel.option('CAMERA 1');
  sel.option('CAMERA 2');
  sel.option('CAMERA 3');
  sel.changed(changeVid);
  sel.position(150,5);
  sel.style('color', '#343434');
  sel.style('background-color', '#31E638');
  sel.style('padding', '3px');
  sel.style('font-size', '15px');



  fill(255, 0, 0);
  // radio.position(200,0);
  // radio.style('color', '#31E638'); 
  // radio.style('background-color', '#343434'); 
  // radio.style('border', 'none'); 
  // radio.style('outline', 'none'); 
  // radio.style('height','38px');
  // radio.style('width','350px');
  // radio.style('line-height', '2.2em');
  // radio.style('font-family', 'helvetica');
  
  textSize(50);
  textAlign(CENTER, CENTER);
  
}

function draw() {
  background(220);
    
  let s = "SMILE. YOU'RE ON CAMERA.";
  // fill('#1C65D2');
  fill('black');
  text(s, width/2, (height/2)-35);
  textSize(24);
  textAlign(CENTER, CENTER);
  
  changeVid();
}

function changeVid(){
  let val = sel.value();
 if(val == 'CAMERA 1'){

   background('#D9D9D9');

   let gridSize = gridSizeSlider.value();

   video.loadPixels();
   for (let y = 0; y < video.height; y += gridSize) {
     for (let x = 0; x < video.width; x += gridSize) {
       let index = (y * video.width + x) * 4;
       let r = video.pixels[index];
       let dia = map(r, 0, 255, gridSize, 2);

       let fillColor = ('#c2ff57');

       // fill(239, 239, 239, 255);
       // rect(10, 119, 84, 62);

       fill(239, 239, 239, 255);
       rect(x, y + r / 10, r / 3, gridSize * 2 / 3);
       rect(x, y + gridSize - gridSize / 2, gridSize, r / 10);

       fill(fillColor);
       stroke('#0726D2');
       strokeWeight(1);
       circle(x + gridSize / 2, y + gridSize / 2, dia);
       
     }
     
   }
    if (invertCheckbox.checked()) {
   filter(INVERT);
 }
   
 } else if(val == 'CAMERA 2'){
    
   let gridSize = gridSizeSlider.value();
   background('#D9D9D9');

   video.loadPixels();
   for (let y = 0; y < video.height; y += gridSize) {
     for (let x = 0; x < video.width; x += gridSize) {
       let index = (y * video.width + x) * 4;
       let r = video.pixels[index];
       let dia = map(r, 0, 255, gridSize, 2);

       fill('#e87b3a');
       stroke('#4CAF50');
       strokeWeight(0.5);

       let fillColor = ('#21BCF3');

       fill(fillColor);
       rect(x + gridSize / 10, y * gridSize * 2, r / 3, r * 2 / 3);
       fill('#e87b3a');
       rect(x, y + gridSize - gridSize / 2, gridSize, r / 30);

       fill('#e87b3a');
     }
   }
     if (invertCheckbox.checked()) {
   filter(INVERT);
     }
   
 } else if(val == 'CAMERA 3'){

   let gridSize = gridSizeSlider.value();
   background('#D9D9D9');

   video.loadPixels();
 for (let y=0; y<video.height; y+=gridSize) {
   for (let x=0; x<video.width; x+=gridSize) {
     let index = (y * video.width + x) * 4;
     let r = video.pixels[index];
     let dia = map(r, 0, 255, gridSize, 2);
        
     fill('#e87b3a');
     stroke('#e2b61f');
     strokeWeight(0.5);

     let fillColor = ('#D51A90');
     
     fill(fillColor);
     rect(x+r-100, y + r / 10+2, gridSize * 2 / 3,r / 3);
     fill('#8808a5');
     rect(x, y + gridSize + 10+5, r / 20, gridSize);

     fill('#e87b3a');
     circle(x + gridSize / 2, y + gridSize / 2, dia);
   }
 }
    if (invertCheckbox.checked()) {
   filter(INVERT);
     }
 
 }
}

function screenshot() {
  saveCanvas("YERH" + ".jpg");
}
