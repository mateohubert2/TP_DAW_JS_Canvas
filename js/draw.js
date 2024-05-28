const canvas = document.querySelector("canvas");
resize();

function resize()
{
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
drawSquare();
}
window.addEventListener("resize", () => {
    resize();
});

function drawSquare(){
    const context = canvas.getContext("2d");
    // Starts the drawing of the shape
    context.beginPath();
    /*
    Prepares the draweing of a rectangle starting at (0 ; 0) with 100 pixels width
    and 100 pixels height
    */
    context.rect(0, 0, 100, 100);
    // Sets the color of filling
    context.fillStyle = "#FF0000";
    // Fills the square
    context.fill();
}