const personagem = document.getElementById('personagem');
const fundoTela = document.getElementById('fundoTela');
let heightFundo = fundoTela.clientHeight;
let widthFundo = fundoTela.clientWidth;
let halfHeightFraction = heightFundo / 2.5;
let halfWidthFraction = widthFundo / 2.5;

let currentPosition = { x: 420, y: -200 };
personagem.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const step = 10;

    switch (key) {
        case 'ArrowLeft':
            if (currentPosition.x - step >= -halfWidthFraction) {
                currentPosition.x -= step;
            }
            break;
        case 'ArrowRight':
            if (currentPosition.x + step <= halfWidthFraction) {
                currentPosition.x += step;
            }
            break;
        case 'ArrowUp':
            if (currentPosition.y - step >= -halfHeightFraction) {
                currentPosition.y -= step;
            }
            break;
        case 'ArrowDown':
            if (currentPosition.y + step <= halfHeightFraction) {
                currentPosition.y += step;
            }
            break;
    }

    personagem.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;
});

