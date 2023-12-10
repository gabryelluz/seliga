function tocar(idElementoAudio) {
    const audio = document.querySelector(idElementoAudio);
    
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }

    audio.play();
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
            tocar(idAudio);
        }
    });

    botao.addEventListener('keyup', function () {
        botao.classList.remove('ativa');
    });
});
