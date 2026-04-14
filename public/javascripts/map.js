
// Initialize map (centered somewhere)
const map = L.map('map').setView([-17.3935, -66.1570], 13); // Cochabamba example

// Add OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19
}).addTo(map);

$.ajax({
    dataType: 'json',
    url: 'api/bicicletas',
    success: function (result) {
        console.log(result);
        result.bicicletas.forEach(function (bici) {
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map)
        });
    }
});