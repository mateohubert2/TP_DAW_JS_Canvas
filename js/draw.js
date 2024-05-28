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
    console.log(solarSystem);
}