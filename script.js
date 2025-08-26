const voyageSpan = document.querySelector("#voyage");
const descriptionSpan = document.querySelector("#description");
const prixSpan = document.querySelector("#prix");

fetch("https://ingrwf12.cepegra-frontend.xyz/cockpit1/api/content/item/voyages")
.then(resp => resp.json())
.then( resp =>  {
    console.log(resp);
    voyageSpan.innerHTML = resp['voyages-label'];
    descriptionSpan.innerHTML = resp['voyages-description']
    prixSpan.innerHTML = resp['voyages-prix']
})