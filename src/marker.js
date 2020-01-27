const mapboxgl = require("mapbox-gl");


const makeMarker = function(type, coordinates){
  const markerElement = document.createElement('div');
  markerElement.style.width = "32px";
  markerElement.style.height = "39px";
  if(type == 'activity'){
    markerElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  else if(type == 'hotel'){
    markerElement.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }
  else{//type is restaurant
    //restaurant icon
    markerElement.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }
  const mapMarker = new mapboxgl.Marker(markerElement).setLngLat([-74.009151, 40.705086]);
  console.log('using marker.js');
  return mapMarker;
}

module.exports = makeMarker;
