const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const CANVAS_WITH = canvas.with = CANVAS_HEIGHT = canvas.height = 600;
const BASE_URL = "https://melihkacaman.github.io/melih_advanced_programming_lab/sprites/";

const playerIMG = document.getElementById("player");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const pause = document.getElementById("pause");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const sprites = [];
let iterator = 0;
let goingOn = false;

async function main() {
    stop.disabled = true;
    pause.disabled = true;
    next.disabled = true;
    prev.disabled = true;

    for (let i = 0; i < 9; i++) {
        const imageUrl = `${BASE_URL}${i}.png`;
        await fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                const sprite = new Image();
                sprite.src = URL.createObjectURL(blob);
                sprites.push(sprite);
            });;
    }
}

start.addEventListener("click", (e) => {
    if (sprites.length == 9 && start.disabled == false) {
        iterator = 0;
        goingOn = true;
        animate();
        start.disabled = true;
        stop.disabled = false;
        pause.disabled = false;
    }
});

stop.addEventListener("click", (e) => {
    if (start.disabled == true) {
        prev.disabled = next.disabled = true;
        goingOn = false;
        iterator = 0;
        start.disabled = false;
        pause.disabled = true;
    }
});

pause.addEventListener("click", (e) => {
    if (start.disabled == true && stop.disabled == false) {
        prev.disabled = next.disabled = !prev.disabled;
        goingOn = !goingOn;
        if (goingOn == true) {
            animate();
        }
    }
});

next.addEventListener("click", (e) => {
    if (start.disabled == true && stop.disabled == false) {
        if (iterator == 8) {
            iterator = 0;
        } else {
            iterator++;
        }
        ctx.clearRect(0, 0, CANVAS_WITH, CANVAS_HEIGHT);
        ctx.drawImage(sprites[iterator], 0, 0);
    }
});

prev.addEventListener("click", (e) => {
    if (start.disabled == true && stop.disabled == false) {
        if (iterator == 0) {
            iterator = 8;
        } else {
            iterator--;
        }
        ctx.clearRect(0, 0, CANVAS_WITH, CANVAS_HEIGHT);
        ctx.drawImage(sprites[iterator], 0, 0);
    }
});

async function animate() {
    await setTimeout(() => {
        ctx.clearRect(0, 0, CANVAS_WITH, CANVAS_HEIGHT);
        ctx.drawImage(sprites[iterator], 0, 0);

        if (iterator == 8) {
            iterator = 0;
        } else {
            iterator++;
        }

        if (goingOn == true) {
            requestAnimationFrame(animate);
        }
    }, 100);
}

main();

