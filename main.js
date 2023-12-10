function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaTeclas = document.querySelectorAll('.tecla');

ListaTeclas.forEach(botao => {
    const tecla = botao.dataset.som;
    const idAudio = `#${tecla}`;

    botao.onclick = function () {
        tocar(idAudio);
    }

    botao.addEventListener('keydown', function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            botao.classList.add('ativa');
        }
    });

    botao.addEventListener('keyup', function () {
        botao.classList.remove('ativa');
    });
});
