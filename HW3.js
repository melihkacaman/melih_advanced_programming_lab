const canvas = document.getElementById("canvas");
const CANVAS_WITH = canvas.with = CANVAS_HEIGHT = canvas.height = 600;
const BASE_URL = "https://melihkacaman.github.io/melih_advanced_programming_lab/sprites/";
const playerIMG = document.getElementById("player");
const sprites = [];

function main() {
    for (let i = 0; i < 10; i++) {
        const imageUrl = `${BASE_URL}${i}.png`;
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                const sprite = new Image();
                sprite.src = URL.createObjectURL(blob);
                sprites.push(sprite);
            });;
    }

}

function fun(array) {
    array.forEach(element => {
        console.log(element);
    });
}

main();

