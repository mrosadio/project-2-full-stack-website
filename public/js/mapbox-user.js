/* ------------------------ */
/* 0. Store token           */
/* ------------------------ */

mapboxgl.accessToken = 'pk.eyJ1IjoibWljYWVsYS1yb3NhZGlvIiwiYSI6ImNsYXF1eXg4azAwZjQzeW92cjJrMDJwOXYifQ.NOmLvhjeSluUXlAlqmuDrg';

/* ------------------------ */
/* 1. Initialize User map   */
/* ------------------------ */

const map       = new mapboxgl.Map({
    container:    "mapbox-user",
    style:        "mapbox://styles/mapbox/streets-v11",
    center:       [13.4, 52.5], // starting position [lng, lat]
    zoom:         5 // starting zoom
  });


/* ------------------------ */
/* 4. Mark cities of user   */
/* ------------------------ */

// 4.2. User coordinates

const userOwnerId = document.getElementById("userOwnerId-input").value

axios.get(`/user-coordinates/${userOwnerId}`)
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
        .addTo(map); 
      })
    })        
.catch(err => console.log(err));


/* ------------------------ */
/* 2. Add the Geocoder      */  
/* ------------------------ */

const geocoder = new MapboxGeocoder({
    accessToken:    mapboxgl.accessToken, // Set the access token
    placeholder:    'Which city did you visit?',
    language:       'en-EN',
    mapboxgl:       mapboxgl,             // Set the mapbox-gl instance
    marker:         true                  // Do not use the default marker style
  });
  
  // Add the geocoder to the map
  map.addControl(geocoder); // For later: Hide geocoder 
  geocoder.addTo('#geocoder');
  
  
  /* ------------------------ */
  /* 3. Create events and 
      add marker at location 
  /* ------------------------ */
  
  map.on('load', () => {
    // Listen for the `result` event from the Geocoder
    // `result` event is triggered when a user makes a selection
    geocoder.on('result', (event) => {
      document.getElementById("geocoder-input").value    = event.result.place_name; 
      document.getElementById("coordinates").value       = event.result.center; 
      //map.getSource('single-point').setData(event.result.geometry);
    });
  });
  
  