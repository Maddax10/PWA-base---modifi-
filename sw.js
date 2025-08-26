//Avoir le même n° de version dans le manifest et le SW
const version = "1.0";

//1)Installation
//‼️on est pas dans le navigateur
//❔Pour vérifier que ça fonctionne bien, on peut aussi inspecteur d'éléments -> Application -> Service Workers
self.addEventListener('install', e => {
    console.log('sw installed ✅');
    return self.skipWaiting();
})


//2)Activation
self.addEventListener('activate', e => {
    console.log('sw activated ✅');

})