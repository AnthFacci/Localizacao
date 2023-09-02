var map;
function sucess(pos){
    console.log(pos.coords.latitude, pos.coords.longitude)
    if (map === undefined){
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);

    }else{
        map.remove()
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }
     


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    L.marker([[pos.coords.latitude, pos.coords.longitude]]).addTo(map)
    .bindPopup('Sua localização')
    .openPopup();
}

function error(erro){
    console.log(erro)
}

var watchID = navigator.geolocation.watchPosition(sucess, error, {
enableHighAccuracy: true,
timeout: 10000
})
