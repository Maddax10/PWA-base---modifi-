//Va permettre d'installer l'app
const installBtn = document.querySelector("#installBtn");

let deferredPrompt = null;

installBtn.classList.add('hidden');

window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    installBtn.classList.remove("hidden");
    //On récupère l'évent
    deferredPrompt = e;
})

installBtn.addEventListener("click", e => {
    e.preventDefault();
    //On utilise le prompt
    deferredPrompt.prompt();
})