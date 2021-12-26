mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWtrZCIsImEiOiJja3g0b3I4YmcwdGxvMm9ueDVldnEybnBqIn0.4az_UXdk75UykPBxBNzc-A";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [135.484802, 34.672314],
  zoom: 8,
});
//to add map controls i.e adding zoom and rotation controls to the map
map.addControl(new mapboxgl.NavigationControl());
const center = [135.484802, 34.672314];
//marker
new mapboxgl.Marker() //our marker

  //calling methods now on this marker
  .setLngLat(center) //setting the latitude and longitude so thats where the data going
  // .setPopup(
  //     new mapboxgl.Popup({ offset: 25 })
  //         .setHTML(
  //             // `<h3>${campground.title}</h3><p>${campground.location}</p>`
  //         )
  // )
  .addTo(map);
