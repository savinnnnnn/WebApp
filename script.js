let wakeLock = null;

async function ativarWakeLock() {
    try {
        wakeLock = await navigator.wakeLock.request("screen");
        wakeLock.addEventListener("release", () => {
            console.log("Wake Lock liberado");
        });
        console.log("Wake Lock ativado");
    } catch (err) {
        console.error("Erro ao ativar Wake Lock:", err);
    }
}

function atualizarChat() {
    const chatUrl = document.getElementById('chatUrl').value;
    const chatFrame = document.getElementById('chatFrame');
    chatFrame.src = chatUrl;
}

function atualizarPixGG() {
    const pixggUrl = document.getElementById('pixggUrl').value;
    const pixggFrame = document.getElementById('pixggFrame');
    pixggFrame.src = pixggUrl;
}

function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// Ativa o Wake Lock automaticamente ao carregar o site
document.addEventListener('DOMContentLoaded', (event) => {
    ativarWakeLock();
});