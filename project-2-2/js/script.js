let gridSizeSlider;
let invertCheckbox;

let button;

let checkbox1, checkbox2, checkbox3;
let video;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight-38);
  canvas.position(0, 38);

  gridSizeSlider = createSlider(10, 50, 10);
  gridSizeSlider.position(10, 10);
  
  invertCheckbox = createCheckbox(' INVERT', false);
  invertCheckbox.position(550, 10);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  button = createButton('SCREENSHOT');
  // button.position(width - button.width - 30, 10);
  button.position(800, 10);
  button.mousePressed(screenshot);

  // create the checkboxes
  checkbox1 = createCheckbox(' Option 1', false);
  checkbox1.position(200, 10);

  checkbox2 = createCheckbox(' Option 2', false);
  checkbox2.position(300, 10);

  checkbox3 = createCheckbox(' Option 3', false);
  checkbox3.position(400, 10);

  // set a change event listener for each checkbox
  checkbox1.changed(updateCheckboxes);
  checkbox2.changed(updateCheckboxes);
  checkbox3.changed(updateCheckboxes);
  
  
}

function draw() {
  background(220);

  // image(video, 0, 0, width, height);

  // check which checkbox is checked and execute the corresponding code
  if (checkbox1.checked()) {
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
    
  } else if (checkbox2.checked()) {
    let gridSize = gridSizeSlider.value();

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
  } else if (checkbox3.checked()){
    let gridSize = gridSizeSlider.value();

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

  function updateCheckboxes() {
  // uncheck all checkboxes except for the one that was just checked
  if (checkbox1.checked()) {
    checkbox2.checked(false);
    checkbox3.checked(false);
  } else if (checkbox2.checked()) {
    checkbox1.checked(false);
    checkbox3.checked(false);
  } else if (checkbox3.checked()) {
    checkbox1.checked(false);
    checkbox2.checked(false);
  }
}

function screenshot() {
  saveCanvas("YERH" + ".jpg");
}
