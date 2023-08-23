const personagem = document.getElementById('personagem');
const fundoTela = document.getElementById('fundoTela');
let heightFundo = fundoTela.clientHeight;
let widthFundo = fundoTela.clientWidth;
let halfHeightFraction = Math.abs(heightFundo / 2.5);
let halfWidthFraction = Math.abs(widthFundo / 2.5);

let currentPosition = { x: 0, y: 0 };

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const step = 10; // Ajuste este valor para controlar a velocidade de movimento

    switch (key) {
        case 'ArrowLeft':
            if(Math.abs(currentPosition.x) >= halfWidthFraction){
                break;
            }
            currentPosition.x -= step;
            break;
        case 'ArrowRight':
            if(Math.abs(currentPosition.x) >= halfWidthFraction){
                break;
            }
            currentPosition.x += step;
            break;
        case 'ArrowUp':
            if(Math.abs(currentPosition.y) > halfHeightFraction){
                break;
            }
            currentPosition.y -= step;
            break;
        case 'ArrowDown':
            if(Math.abs(currentPosition.y) > halfHeightFraction){
                break;
            }
            currentPosition.y += step;
            break;
    }

    // Restringir o movimento do personagem
    if (Math.abs(currentPosition.y) > halfHeightFraction || Math.abs(currentPosition.x) > halfWidthFraction) {
        return;
    } else {
        personagem.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;
    }
});
