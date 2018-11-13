const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')
mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW5oY2hvMjciLCJhIjoiY2pvZzkxM3ZmMGNseTN3cXY1OWJhdnU4ZyJ9.FKkNQthw3e6T167JOjPoNw'

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

buildMarker('hotels', [-74.009151, 40.705086]).addTo(map)