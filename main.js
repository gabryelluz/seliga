function tocar(idElementoAudio) {
    const audio = document.querySelector(idElementoAudio);

    // Verificar se o áudio está carregado
    if (audio.readyState >= 2) {
        // Parar o áudio atual, se estiver tocando
        audio.pause();
        audio.currentTime = 0;

        // Reproduzir o novo áudio
        audio.play();
    } else {
        console.error(`Erro ao carregar áudio: ${idElementoAudio}`);
    }
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
