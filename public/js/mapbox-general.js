//const { default: axios } = require("axios");

/* ------------------------ */
/* 0. Store token           */
/* ------------------------ */

mapboxgl.accessToken = 'pk.eyJ1IjoibWljYWVsYS1yb3NhZGlvIiwiYSI6ImNsYXF1eXg4azAwZjQzeW92cjJrMDJwOXYifQ.NOmLvhjeSluUXlAlqmuDrg';

/* --------------------------- */
/* 1. Initialize map           */
/* --------------------------- */

const generalMap = new mapboxgl.Map({
  container:     "mapbox-general",
  style:         "mapbox://styles/micaela-rosadio/clatuj1mq000214ofqth2s6z0",
  center:       [13.4, 52.5],
  zoom:         1
})


/* --------------------------- */
/* 2. Mark cities of all users */
/* --------------------------- */

axios.get('/user-coordinates')
     .then(card => {
        card.data.coordinates.forEach((location) => {
        const el     = document.createElement('div');
        el.className = 'marker';

        let city = location.city.split(',')[0];
        new mapboxgl.Marker(el)
            .setLngLat(location.coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                          .setHTML(`<h3>${city}</h3>`)
            )
        .addTo(generalMap); 
      })
    })        
.catch(err => console.log(err));


