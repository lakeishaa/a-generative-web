function showOriginal() {
  // hide process-collection and gifs-collection
  document.getElementById("process-collection").style.display = "none";
  document.getElementById("gifs-collection").style.display = "none";

  // show original-collection
  document.getElementById("original-collection").style.display = "block";
  document.getElementById("original-collection").style.display = "grid";
  document.getElementById("original-collection").style.gridTemplateColumns = "auto auto auto";
}

function showProcess() {
  // hide original-collection and gifs-collection
  document.getElementById("original-collection").style.display = "none";
  document.getElementById("gifs-collection").style.display = "none";
  

  // show process-collection
  document.getElementById("process-collection").style.display = "block";
  document.getElementById("process-collection").style.display = "grid";
  document.getElementById("process-collection").style.gridTemplateColumns = "auto auto auto";

}

function showGifs() {
  // hide original-collection and process-collection
  document.getElementById("original-collection").style.display = "none";
  document.getElementById("process-collection").style.display = "none";

  // show gifs-collection
  document.getElementById("gifs-collection").style.display = "block";
  document.getElementById("gifs-collection").style.display = "grid";
  document.getElementById("gifs-collection").style.gridTemplateColumns = "auto auto auto";
  // document.getElementById("gifs-images").style.marginRight = "auto";
  // document.getElementById("gifs-images").style.marginLeft = "auto";
  // document.getElementById("gifs-collection").style.marginBottom = "100px";


}

// set the initial display style for each collection
document.getElementById("original-collection").style.display = "none";
document.getElementById("process-collection").style.display = "none";
document.getElementById("gifs-collection").style.display = "none";





let phase = 0;
let frequency = 1;
let amplitude = 150 * Math.random();
let scriptNumber = Math.floor(Math.random() * 2) + 1;

function setup() {
  createCanvas(500, 700);
  noLoop();
}

function draw() {
  background('black');

  blendMode(DIFFERENCE);

  if (scriptNumber === 1) {
    script1();
  } else if (scriptNumber === 2) {
    script2();
  }
  
  console.log(scriptNumber);
}

function script1() {
  let k = random(100, 230);

  stroke(color(0, k, 255));

  strokeWeight(random(1, 15));

  let waves = random(0.5, 3);
  phase += waves;

  for (let x = 10; x < width; x += waves) {
    let f = random(0.01, 1);
    let y = tan(x * f + phase) * amplitude;
    let size1 = random(10, 100 * Math.random());
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);

    strokeWeight(random(1, 10));
    ellipse(x, y + height / 2, size1, size1);
  }

  let phase2 = 2;
  let frequency2 = 0.2;
  let amplitude2 = 700;

  let waves2 = random(1);
  phase2 += waves2;

  for (let x = 10; x < width; x += waves2) {
    let y = sin(x * frequency2 + phase2) * amplitude2;
    let size2 = random(1, 7 * Math.random());

    strokeWeight(random(1, 10));
    stroke(255, 255, 255);
    noFill();
    ellipse(x, y + height / 2, size2, size2);
  }
}

function script2() {
  let k = random(100,230);

  stroke(color(0, k, 255));
  console.log (k);
// stroke(randomColor); // Set the stroke color to the randomly selected color

  strokeWeight(random(1,15));
  
  // console.log(k);

  let waves = random(0.5,10);
  // let waves = random(0.5, 3);
  phase += waves;

  for (let x = 10; x < width; x += waves) {
    let y = tan(x * frequency + phase) * amplitude;
    let size1 = random(20, 100 * Math.random());
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);

    strokeWeight(random(1, 10));
    // stroke(r, g, b);
    // fill(r, g, b);
    // fill (color(0, 128, 255));

    ellipse(x, y + height/2, size1, size1);
  }

  // Additional code
  
  let f = random(0.01,1);
  
  let phase2 = 2;
  let frequency2 = f;
  let amplitude2 = (0,700);

  let waves2 = random(1);
  phase2 += waves2;

  for (let x = 10; x < width; x += waves2) {
    let y = sin(x * frequency2 + phase2) * amplitude2;
    let size2 = random(1, 7 * Math.random());
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);

    strokeWeight(random(1, 10));
    stroke(255, 255, 255);
    // noFill();
    // fill (color(0, 128, 255));
    ellipse(x, y + height/2, size2, size2);
  }
}





// Get the refresh button element and add an event listener
let refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", refreshPage);

// Define the refreshPage function that refreshes the page
function refreshPage() {
  location.reload();
}




