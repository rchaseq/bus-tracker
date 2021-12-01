// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-74.022740, 41.916100],
  [-74.016190, 41.936870],
  [-74.067050, 41.926360],
  [-74.173530, 41.830360],
  [-74.128660, 41.851180],
  [-74.143960, 41.847900],
  [-74.231400, 41.788910],
  [-74.298180, 41.774840],
  [-74.371150, 41.742320],
  [-74.380050, 41.732900],
  [-74.382400, 41.732790],
  [-74.392560, 41.717120],
];

// My access token
mapboxgl.accessToken =
  'pk.eyJ1IjoicmNoYXNlcSIsImEiOiJja3dsaDFsdnkyMjFmMnNvNHVjbzBrOHRxIn0.yiJCBmOAaG8s7IMYFCtUkw';

// Map object
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/rchaseq/ckwn0e12w46q515lew9ujd72i',
  center: [-74.230990, 41.788900],
  zoom: 12,
});

// Map marker
let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);

// Counter to access bus stops in the array busStops every 1000ms
let counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
};