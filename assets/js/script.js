const personagem = $("#personagem");
const fundoTela = $("#fundoTela");
const larguraTela = $(window).width();
const alturaTela = $(window).height();

$(document).ready(function () {
    posicaoInicialPersonagem()
});

$(document).on("keydown", function(event) {
    const tecla = event.which;
    validarTecla(tecla)
});

$(document).on("keyup", function(event) {
    personagem.css({
        'background-image': `url("/assets/img/character.png")`
    });
});

$("#direcional").on("touchstart", function (event) {
    touchStartX = event.originalEvent.touches[0].pageX;
    touchStartY = event.originalEvent.touches[0].pageY;
});

$("#direcional").on("touchmove", function (event) {
    console.log('bbbb')
    event.preventDefault(); // Evita o comportamento padrão do scroll

    const touchEndX = event.originalEvent.touches[0].pageX;
    const touchEndY = event.originalEvent.touches[0].pageY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        deltaX > 0 ? moverPersonagem(2, 0, '/assets/img/characterRight.gif') : moverPersonagem(-2, 0, '/assets/img/characterLeft.gif');
    } else {
        deltaY > 0 ? moverPersonagem(0, 2, '/assets/img/characterDown.gif') : moverPersonagem(0, -2, '/assets/img/characterUp.gif');
    }
});

$("#direcional").on("touchend", function () {
    personagem.css({
        'background-image': `url("/assets/img/character.png")`
    });
});

function validarTecla(tecla) {
    switch (tecla) {
        case 37: // seta para a esquerda
            moverPersonagem(-10, 0, '/assets/img/characterLeft.gif');
            break;
        case 38: // seta para cima
            moverPersonagem(0, -10, '/assets/img/characterUp.gif');
            break;
        case 39: // seta para a direita
            moverPersonagem(10, 0, '/assets/img/characterRight.gif');
            break;
        case 40: // seta para baixo
            moverPersonagem(0, 10, '/assets/img/characterDown.gif');
            break;
    }
}

function moverPersonagem(deltaX, deltaY, imagem) {
    // Obter a posição atual do personagem
    const posicaoAtual = personagem.position();

    // Calcular a nova posição com base no deslocamento
    const novaPosicao = {
        left: posicaoAtual.left + deltaX,
        top: posicaoAtual.top + deltaY
    };

    // Limitar a posição dentro das bordas de fundoTela
    novaPosicao.left = Math.max(0, Math.min(larguraTela - personagem.width(), novaPosicao.left));
    novaPosicao.top = Math.max(0, Math.min(alturaTela - personagem.height(), novaPosicao.top));

    // Atualizar a posição do personagem
    personagem.css({
        left: novaPosicao.left + 'px',
        top: novaPosicao.top + 'px',
        'background-image': `url("${imagem}")`// Substitua pela URL da nova imagem
    });
}

function posicaoInicialPersonagem() {
    const porcentagemX = 100 - 10;
    const porcentagemY = 20;

    const x = (porcentagemX / 100) * larguraTela - personagem.width();
    const y = (porcentagemY / 100) * alturaTela;

    personagem.css({
        position: 'absolute',
        left: x + 'px',
        top: y + 'px'
    });
}

