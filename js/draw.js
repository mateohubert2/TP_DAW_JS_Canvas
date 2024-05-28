const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
resize();

function resize()
{
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
drawSolarSystem();
}
window.addEventListener("resize", () => {
    resize();
});

function drawSquare(){
    console.log(solarSystem);
}

function drawCelestialBody(celestialBody){
    context.save();
    context.rotate(celestialBody.orbitalAngle);
    context.translate(celestialBody.distance, 0);
    context.beginPath();
    context.arc(0, 0, celestialBody.radius, 0, 2 * Math.PI);
    context.fillStyle = celestialBody.color;
    context.fill();
    celestialBody.satellites.forEach((satellite) => {
        drawOrbit(satellite);
        drawCelestialBody(satellite);
    });
    context.restore();
    animate();
}

function drawSolarSystem(){
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    drawCelestialBody(solarSystem.sun);
    context.restore();
}

function drawOrbit(celestialBody)
{
    context.beginPath();
    context.arc(0, 0, celestialBody.distance, 0, 2 * Math.PI);
    context.strokeStyle = "#333333";
    context.stroke();
}

function animate()
{
    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawSolarSystem();
        solarSystem.sun.update(50);
    }, 50);
}