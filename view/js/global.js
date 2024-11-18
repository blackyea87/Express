const audio = document.getElementById("background-audio");

function iniciarAudio() {
    const tempoSalvo = localStorage.getItem("tempoAudio");
    if (tempoSalvo) {
        audio.currentTime = parseFloat(tempoSalvo);
    }
       audio.play().catch((error) => {
        console.log("O autoplay foi bloqueado:", error);
       });
}

// tô achando que isso não funciona, tem parada errada ai mano...
window.addEventListener("load", () => {
    iniciarAudio();
});

// salva o progresso do áudio antes de sair da página
window.addEventListener("beforeunload", () => {
    localStorage.setItem("tempoAudio", audio.currentTime);
});

// continua o áudio quando voltar pra página
document.addEventListener("visibilitychange", () => {
if (document.visibilityState === "visible") {
        iniciarAudio();
    }
});