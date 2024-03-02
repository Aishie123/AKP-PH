var map = L.map('map').setView([35.6895, 139.6917], 5); // Initial view on Japan

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Loop through alumniData and add markers to the map
for (var prefecture in alumniData) {
  var alumniInfo = alumniData[prefecture];
  var marker = L.marker(getRandomLocation(prefecture)).addTo(map);
  marker.bindPopup(prefecture + "<br>" + alumniInfo);
  marker.on('click', function () {
    document.getElementById('alumni-info').innerHTML = alumniInfo;
  });
}

function getRandomLocation(prefecture) {
  // Generate random coordinates within the bounds of the prefecture
  // Replace this with actual coordinates for each prefecture
  var minLat = 35.5, maxLat = 36, minLng = 139, maxLng = 140;
  var lat = Math.random() * (maxLat - minLat) + minLat;
  var lng = Math.random() * (maxLng - minLng) + minLng;
  return [lat, lng];
}
