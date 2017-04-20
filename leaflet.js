/*var longAulario = 40.2838;
var latAulario = -3.8215;

var mymap = L.map('mapid').setView([longAulario, latAulario], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker([longAulario, latAulario]).addTo(mymap);

var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("(Longitud, Latitud): " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);*/

var mymap = L.map('mapid').fitWorld();
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

mymap.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("Estas a " + radius + " m de este punto.").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);
