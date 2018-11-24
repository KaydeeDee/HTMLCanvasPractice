const cursor = document.getElementById('cursor');
const canvasTag = document.getElementById('canvasIn');

let isMouseDown = false;

// on click down make cursor larger
const growCursor = () => {
    cursor.classList.add('isDown');
}

//on click up make cursor normal size again
const shrinkCursor = () => {
    cursor.classList.remove('isDown');
}

//move cursor based on coordinates
const moveCursor = (x, y) => {
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
}

//set up canvas
const setupCanvas = (canvas) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpi = window.devicePixelRatio;

    // for retina screens
    canvas.width = width * dpi;
    canvas.height = height * dpi;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    // setting it to 2d 
    const context = canvas.getContext("2d");
    // for retina screens
    context.scale(dpi, dpi);

    context.strokeStyle = 'red';
    context.lineWidth = 80;
    context.lineCap = 'round';
    context.lineJoin = 'round';

    // for red rec
    // context.fillStyle = 'red';
    // context.rect(100, 100, 600, 400);
    // // calling the red colour to fill
    // context.fill();
}

// lets start to draw based on canvas, x and y
const startDraw = (canvas, x, y) => {
    const context = canvas.getContext('2d');
    const colours = ['red', 'yellow', 'blue', 'green'];
    const randomNum = Math.floor(Math.random() * colours.length);

    context.strokeStyle = colours[randomNum];

    context.moveTo(x, y);

    // creates new path
    context.beginPath();
}

// drawing based on canvas, x and y
const moveDraw = (canvas, x, y) => {
    const context = canvas.getContext('2d');

    if (isMouseDown) {
        context.lineTo(x, y);
        context.stroke();
    }

    // for rec shape
    // context.rect(x - 30, y - 20, 60, 40);
    // context.fill();
}


setupCanvas(canvasTag);


document.addEventListener('mousedown', function(e) {
    isMouseDown = true;
    growCursor();
    startDraw(canvasTag, e.pageX, e.pageY);
});
document.addEventListener('mouseup', function() {
    isMouseDown = false;
    shrinkCursor();
});

document.addEventListener('mousemove', function(e) {
    moveCursor(e.pageX, e.pageY);
    moveDraw(canvasTag, e.pageX, e.pageY);
});


