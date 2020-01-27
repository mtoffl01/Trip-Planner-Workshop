const makeMarker = require('./marker');
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = "pk.eyJ1IjoibWlrYXlsYXRvZmZsZXIiLCJhIjoiY2s1d3A0MG9lMGVmcjNscWJlNGFodjdmaSJ9.PorACSVkLuxFr8TLbxbHVw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerElement = document.createElement('div');
markerElement.style.width = "32px";
markerElement.style.height = "39px";
markerElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const fullStackMarker = makeMarker('activity', [-74.009151, 40.705086]);
fullStackMarker.addTo(map);



