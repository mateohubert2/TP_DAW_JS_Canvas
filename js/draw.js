const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
resize();

function resize()
{
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
drawCelestialBody(solarSystem.sun);
}
window.addEventListener("resize", () => {
    resize();
});

function drawSquare(){
    console.log(solarSystem);
}

function drawCelestialBody(celestialBody){
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, celestialBody.radius, 0, 2 * Math.PI);
    context.fillStyle = celestialBody.color;
    context.fill();
}