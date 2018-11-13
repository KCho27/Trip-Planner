const mapbox = require("mapbox-gl");
// mapbox.accessToken = 'pk.eyJ1Ijoia2V2aW5oY2hvMjciLCJhIjoiY2pvZzkxM3ZmMGNseTN3cXY1OWJhdnU4ZyJ9.FKkNQthw3e6T167JOjPoNw'
const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

// const map = new mapbox.Map({
//     container: "map",
//     center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//     zoom: 12, // starting zoom
//     style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
//   });

const buildMarker = function(type, coords) {
    // Your Code Here
const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
console.log(markerDomEl)
return new mapbox.Marker(markerDomEl).setLngLat(coords);

};

module.exports = buildMarker;