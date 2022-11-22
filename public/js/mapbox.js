//const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken = 'pk.eyJ1IjoibWljYWVsYS1yb3NhZGlvIiwiYSI6ImNsYXF1eXg4azAwZjQzeW92cjJrMDJwOXYifQ.NOmLvhjeSluUXlAlqmuDrg';
console.log("Mapbox exists!");
var map = new mapboxgl.Map({
  container:    "mapbox",
  style:        "mapbox://styles/mapbox/streets-v11",
  center:       [13.4, 52.5], // starting position [lng, lat]
  zoom: 9 // starting zoom
});


// map.on('load', () => {
//     map.addSource('admin-3', {
//         type: 'vector',
//         // Use any Mapbox-hosted tileset using its tileset id.
//         // Learn more about where to find a tileset id:
//         // https://docs.mapbox.com/help/glossary/tileset-id/
//         url: 'mapbox://mapbox.boundaries-adm3-v4',
//         promotedId: "mapbox_id"
//     });
//     map.addLayer(
//     {
//         'id': 'admin-3-fill',
//         'type': 'fill',
//         'source': 'admin-3',
//         'source-layer': 'boundaries_admin_3',
//         'layout': {
//             'line-join': 'round',
//             'line-cap': 'round'
//         },
//         'paint': {
//             'fill-color': '#CCCCCC',
//             'fill-opacity': 0.5
//         }
//     },
//     //'road-label-simple' // Add layer below labels
//         "waterway-label"
//     );
// });

map.on('load', () => {
    map.addSource('mapbox-terrain', {
    type: 'vector',
    // Use any Mapbox-hosted tileset using its tileset id.
    // Learn more about where to find a tileset id:
    // https://docs.mapbox.com/help/glossary/tileset-id/
    url: 'mapbox://mapbox.mapbox-terrain-v2'
    });
    map.addLayer(
    {
    'id': 'terrain-data',
    'type': 'line',
    'source': 'mapbox-terrain',
    'source-layer': 'contour',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#ff69b4',
    'line-width': 1
    }
    },
    'road-label-simple' // Add layer below labels
    );
    });
  

  
  
  