const install = () => {
  const installBtn = document.querySelector("#installBtn");

  let deferredPrompt = null;

  installBtn.classList.add("hidden");

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.classList.remove("hidden");
    console.log("beforeinstallprompt event fired");
  });

  installBtn.addEventListener("click", (e) => {
    e.preventDefault();
    installBtn.classList.add("hidden");
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choice) => {
      console.log(choice);
    });
    deferredPrompt = null;
  });

  window.addEventListener("appinstalled", (e) => {
    console.log("PWA installed");
    installBtn.classList.add("hidden");
  });
};
export default install();