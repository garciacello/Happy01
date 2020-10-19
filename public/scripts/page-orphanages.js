//const {orphanages} = require("../../src/pages");

// Create map
const map = L.map('mapid').setView([-19.8842195,-43.956809],15);

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

function addMarker({id, name, lat, lng}) {

//Create popup overlay
const popup = L.popup({
    closeButton:false,
    className: 'map-popup', 
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/imagens/arrow-white.svg" ></a>`)


//Creat and add marker
L.marker([lat,lng], { icon })
.addTo(map)
.bindPopup(popup)

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id, 
        name: span.dataset.name, 
        lat:span.dataset.lat,
        lng:span.dataset.lng
    }

    addMarker(orphanage)
})


    