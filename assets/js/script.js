const personagem = document.getElementById('personagem');
const fundoTela = document.getElementById('fundoTela');
const portaExperiencia = document.querySelector('.portaExperiencia');

let heightFundo = fundoTela.clientHeight;
let widthFundo = fundoTela.clientWidth;
let halfHeightFraction = heightFundo / 2.5;
let halfWidthFraction = widthFundo / 2.5;

let currentPosition = { x: 420, y: -200 };
personagem.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const step = 10;

    const personagemRect = personagem.getBoundingClientRect(); // Get the position and dimensions of the character
    const portaExperienciaRect = portaExperiencia.getBoundingClientRect(); // Get the position and dimensions of the experience door

    const isOverlap = !(
        personagemRect.right < portaExperienciaRect.left ||
        personagemRect.left > portaExperienciaRect.right ||
        personagemRect.bottom < portaExperienciaRect.top ||
        personagemRect.top > portaExperienciaRect.bottom
    );

    switch (key) {
        case 'ArrowLeft':
            if (currentPosition.x - step >= -halfWidthFraction) {
                currentPosition.x -= step;
                personagem.style.backgroundImage = 'url("/assets/img/characterLeft.png")';
            }
            break;
        case 'ArrowRight':
            if (currentPosition.x + step <= halfWidthFraction) {
                currentPosition.x += step;
                personagem.style.backgroundImage = 'url("/assets/img/characterRight.png")';
            }
            break;
        case 'ArrowUp':
            if (currentPosition.y - step >= -halfHeightFraction) {
                currentPosition.y -= step;
                personagem.style.backgroundImage = 'url("/assets/img/characterBack.png")';
            }
            break;
        case 'ArrowDown':
            if (currentPosition.y + step <= halfHeightFraction) {
                currentPosition.y += step;
                personagem.style.backgroundImage = 'url("/assets/img/characterFront.png")';
            }
            break;
        case 'Enter':
            if (isOverlap) {
                abrirModalExperiencia()
            }
            break;
    }

    personagem.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;
});

