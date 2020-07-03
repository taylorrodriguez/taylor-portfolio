let yoff = 0.0;

function setup() {
    var canvas = createCanvas(displayWidth, displayHeight);
    canvas.parent('home');
}

function resizedCanvas() {
    resizeCanvas(displayWidth,displayHeight);
}

function draw() {
    background('transparent');
    fill('#182025');
    beginShape();
    
let xoff = yoff;
    for(let x = 0; x <= width; x+=10){
        noStroke();
        let y = map(noise(xoff),0,1,200,300);
        vertex(x, y);
        xoff +=0.05;
    }
    yoff+=0.003;
    vertex(width,height);
    vertex(0,height);
    endShape();
}