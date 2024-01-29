let cellWidth = 100,
  cellHeight = 100;
let rows, cols;
let shapes = [
  "town1",
  "town2",
  "town3",
  "town4",
  "town5",
  "town6",
  "town7",
  "town8",
  "town9",
  "town10",
  "town11",
  "town12",
  "town13",
];
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13;

function preload() {
  img1 = loadImage('town_house.JPG');
  img2 = loadImage('town_house2.JPG');
  img3 = loadImage('town_car2.JPG');
  img4 = loadImage('town_car.JPG');
  img5 = loadImage('town_flower2.JPG');
  img6 = loadImage('town_flower.JPG');
  img7 = loadImage('town_grass2.JPG');
  img8 = loadImage('town_grass3.JPG');
  img9 = loadImage('town_grass.JPG');
  img10 = loadImage('town_tree2.JPG');
  img11 = loadImage('town_tree.JPG');
  img12 = loadImage('town_bench.JPG');
  img13 = loadImage('town_mailbox.JPG');
}

function setup() {
  cols = Math.floor(windowWidth / cellWidth);
  rows = Math.floor(windowHeight / cellHeight);
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(3);
}

function draw() {
  background(0, 22);

  for (let i = -9; i < cols; i++) {
    for (let j = -9; j < rows; j++) {
      let x = i * cellWidth;
      let y = j * cellHeight;
      let shape = random(shapes);
      push();
      translate(x, y);

      noFill();

      if (shape === "town1") {
        texture(img1);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town2") {
        texture(img2);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town3") {
        texture(img3);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town4") {
        texture(img4);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town5") {
        texture(img5);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town6") {
        texture(img6);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town7") {
        texture(img7);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town8") {
        texture(img8);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town9") {
        texture(img9);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town10") {
        texture(img10);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town11") {
        texture(img11);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town12") {
        texture(img12);
        rect(0, 0, cellWidth, cellHeight);
      } else if (shape === "town13") {
        texture(img13);
        rect(0, 0, cellWidth, cellHeight);
      }

      pop();
    }
  }
}

function mouseClicked() {
  setup();
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("myCanvas", "png");
  }
}
