/* 
1. Create hidden html element that contains the user ID
2. Make an axios request including the using ID
3. Add the userID in the route
*/

//const { default: axios } = require("axios");

/* ------------------------ */
/* 0. Store token           */
/* ------------------------ */

mapboxgl.accessToken = 'pk.eyJ1IjoibWljYWVsYS1yb3NhZGlvIiwiYSI6ImNsYXF1eXg4azAwZjQzeW92cjJrMDJwOXYifQ.NOmLvhjeSluUXlAlqmuDrg';

/* --------------------------- */
/* 1. Initialize map           */
/* --------------------------- */


console.log("mapbox: ", document.getElementById("mapbox-general"))

const generalMap = new mapboxgl.Map({
  container:     "mapbox-general",
  style:         "mapbox://styles/mapbox/streets-v11",
  center:       [13.4, 52.5],
  zoom:         2
})


/* --------------------------- */
/* 4. Mark cities of all users */
/* --------------------------- */

axios.get('/user-coordinates')
     .then(card => {
        card.data.coordinates.forEach((location) => {
        const el     = document.createElement('div');
        el.className = 'marker';
        console.log("coordinates display:", location.coordinates)
        // Make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
            .setLngLat(location.coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                          .setHTML(`<h3>${location.city}</h3>`)
            )
        .addTo(generalMap); 
      })
    })        
.catch(err => console.log(err));


