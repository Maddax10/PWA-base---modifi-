const notification = () => {
    const notifMeBtn = document.querySelector("#notifMe");

    console.log("notifmeBtn", notifMeBtn)

    notifMeBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let myNotification = null;

        const options = {
            body: "Texte de la notif",
            icon: "/icons/favicon-16x16.png",
            url: "https://cepegra.be",
            vibrate: [200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100],
        };
        //Si on a pas les droits
        if (!("Notification" in window)) {
            alert("Pas de notifs dispos dans ce navigateur");
        }
        //On a deja les droits ?
        else if (Notification.permission === 'granted') {
            console.log('Notif accepted');
            myNotification = new Notification("Hello", options);
            myNotification.open("https://cepegra.be", '_blank');
        }
        //si on a pas déjà demandé si on avait le droit, alors on demande
        else {
            Notification.requestPermission()
                .then(permissionResp => {
                    if (permissionResp === 'granted') {
                        console.log('Notif accepted');
                        myNotification = new Notification("Hello", options);
                        myNotification.open("https://cepegra.be", '_blank');
                    }
                })
        }

        myNotification = null;

    });
};

notification();
