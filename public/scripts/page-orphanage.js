const options = {
    dragging:false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create map
const map = L.map('mapid',options).setView([-19.8842195,-43.956809],15);

// Create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//Create icon
const icon = L.icon({
    iconUrl: "/imagens/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]

})

//Creat and add marker
L.marker([-19.8842195,-43.956809],{icon})
.addTo(map)
    


/*Image gallery */
function selectImage (event){
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button") 
    buttons.forEach(removeActiveClass)
    
    
    function removeActiveClass(button){
        button.classList.remove ("active")
    }

    //selecionar imagem clicada
    const image =  button.children[0]
    const imageContainer = document.querySelector(".orphanage-details >img")

    //atualizar o container da imagem

    imageContainer.src = image.src

    // adicionar a classe .active para este botao
    button.classList.add ("active")
}