const personagem = document.getElementById('personagem');
const fundoTela = document.getElementById('fundoTela');
const portaExperiencia = document.getElementById('portaExperienciaId');
const portaCentroPokemon = document.getElementById('portaCentroPokemonId');

let heightFundo = fundoTela.clientHeight;
let widthFundo = fundoTela.clientWidth;
let halfHeightFraction = heightFundo / 2.5;
let halfWidthFraction = widthFundo / 2.5;

let currentPosition = { x: 420, y: -200 };
personagem.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const step = 7;

    const personagemRect = personagem.getBoundingClientRect();
    const portaExperienciaRect = portaExperiencia.getBoundingClientRect();
    const portaCentroPokemonRect = portaCentroPokemon.getBoundingClientRect();

    let arrayRect = [portaExperienciaRect, portaCentroPokemonRect];
    let arrayId = ['portaExperiencia', 'portaCentroPokemon'];

    
    function isOverDoor(portaRect){
        const isOverlapping = !(
            personagemRect.right < portaRect.left ||
            personagemRect.left > portaRect.right ||
            personagemRect.bottom < portaRect.top ||
            personagemRect.top > portaRect.bottom
        );

        return isOverlapping
    }

    switch (key) {
        case 'ArrowLeft':
            if (currentPosition.x - step >= -halfWidthFraction) {
                currentPosition.x -= step;
                personagem.style.backgroundImage = 'url("/assets/img/characterLeft.gif")';
            }
            break;
        case 'ArrowRight':
            if (currentPosition.x + step <= halfWidthFraction) {
                currentPosition.x += step;
                personagem.style.backgroundImage = 'url("/assets/img/characterRight.gif")';
            }
            break;
        case 'ArrowUp':
            if (currentPosition.y - step >= -halfHeightFraction) {
                currentPosition.y -= step;
                personagem.style.backgroundImage = 'url("/assets/img/characterUp.gif")';
            }
            break;
        case 'ArrowDown':
            if (currentPosition.y + step <= halfHeightFraction) {
                currentPosition.y += step;
                personagem.style.backgroundImage = 'url("/assets/img/characterDown.gif")';
            }
            break;
        case 'Enter':
            let doorCheck;
            console.log(arrayRect.length);
            for (let i = 0; i < arrayRect.length; i++) {
                console.log(personagemRect);
                console.log(arrayRect[i]);
                doorCheck = isOverDoor(arrayRect[i]);
                console.log(doorCheck);
                if(doorCheck){
                    abrirModalPorta(arrayId[i]);
                    break;
                }
            }
            break;
    }

    personagem.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;
});

document.addEventListener('keyup', (event) => {
    const key = event.key;
    
    switch (key) {
        case 'ArrowLeft':
            personagem.style.backgroundImage = 'url("/assets/img/character3.png")';
            break;
        case 'ArrowRight':
            personagem.style.backgroundImage = 'url("/assets/img/character4.png")';
            break;
        case 'ArrowUp':
            personagem.style.backgroundImage = 'url("/assets/img/character2.png")';
            break;
        case 'ArrowDown':
            personagem.style.backgroundImage = 'url("/assets/img/character.png")';
            break;
    }
});

