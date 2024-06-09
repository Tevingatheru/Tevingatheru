let numObjects = 5;
let xPos = [];
let yPos = [];
let fillColors = [];
let speeds = [];
let shapes = [];
let sizes = [];
var canvas;

function setup() {
    setupCanvas();

    for (let i = 0; i < numObjects; i++) {
        xPos[i] = random(width);
        yPos[i] = random(height);
        fillColors[i] = color(random(255), random(255), random(255));
        speeds[i] = random(1, 5);
        shapes[i] = random(['ellipse', 'rect']);
        sizes[i] = random(60);
    }
}

function setupCanvas() {
    canvas = createCanvas(windowWidth, 100);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
    canvas.parent("animation-1");
    canvas.style("display", "block");
    canvas.style("position", "inherit");
    canvas.style("width", "full");
}

function draw() {
    background(220);

    for (let i = 0; i < numObjects; i++) {
        fill(fillColors[i]);

        if (shapes[i] === 'ellipse') {
            ellipse(xPos[i], yPos[i], sizes[i], sizes[i]);
        } else if (shapes[i] === 'rect') {
            rect(xPos[i], yPos[i], sizes[i], sizes[i]);
        }
        xPos[i] += speeds[i];

        if (xPos[i] > width) {
            xPos[i] = 0;
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, 100);
    centerCanvas();
}
