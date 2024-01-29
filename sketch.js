let cellWidth = 40,
  cellHeight = 40;
//seperation of cell height and width to change the shape more
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
let colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33F6", "#F6FF33"];
let img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13;
//set up global variables
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
  img12 = loadImage('town_mailbox.JPG');
}
function setup() {
  //setting up operation to get an integer
  cols = Math.floor(windowWidth / cellWidth);
  rows = Math.floor(windowHeight / cellHeight);
  createCanvas(windowWidth, windowHeight, WEBGL);
  //moves the rate of refresh
}

function draw() {
  //continually executes code inside its block
  //area where there is a big section of code is block
  background(0,22);
  // for meaning is a control flow statement that allows code to be executed routinely in a given condition
  //3 components of for statement
  //for(initilization statement, condition,)
  //1 init is where you define and set the loop variable; in this case it would be i
  //2 condition is a boolean expression which evaluates to true or false
  for (let i = -9; i < cols; i = i + 1) {
    for (let j = -9; j < rows; j = j + 1) {
      let x = i * cellWidth;
      let y = j * cellHeight;
      let shape = random(shapes);
      let color = random(colors);
      noFill();
      //this is the conditional statement
      if (shape === "town1") {
        translate(0, 0);
        texture(img1);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town2") {
        translate(0, 0);
        texture(img2);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town3") {
        translate(0, 0);
        texture(img3);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town4") {
        translate(0, 0);
        texture(img4);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town5") {
        translate(0, 0);
        texture(img5);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town6") {
        translate(0, 0);
        texture(img6);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town7") {
        translate(0, 0);
        texture(img7);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town8") {
        translate(0, 0);
        texture(img8);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town9") {
        translate(0, 0);
        texture(img9);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town10") {
        translate(0, 0);
        texture(img10);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town11") {
        translate(0, 0);
        texture(img11);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town12") {
        translate(0, 0);
        texture(img12);
        rect(x, y, cellWidth, cellHeight);
      } else if (shape === "town13") {
        translate(0, 0);
        texture(img13);
        rect(x, y, cellWidth, cellHeight);
      }
    }
  }
}
//BOTH OF THESE FUNCTIONS MUST STAY!
function mouseClicked() {
  setup();
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("myCanvas", "png");
  }
}
