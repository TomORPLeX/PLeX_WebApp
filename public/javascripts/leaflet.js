/* MAP set up */

var mymap = L.map('mapid').setView([-31.563910, 147.154312], 3);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibnNwbGV4IiwiYSI6ImNpd2VwcWp5azAwYTYyems0YjJ3eW90Y2sifQ.l_f-I_QjwU25BMyQyfNphg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibnNwbGV4IiwiYSI6ImNpd2VwcWp5azAwYTYyems0YjJ3eW90Y2sifQ.l_f-I_QjwU25BMyQyfNphg'
}).addTo(mymap);

var locations = [
    [51, 0],
    [-31.563910, 147.154322],
    [-31.563910, 147.154332],
    [-31.563910, 147.154342],
    [-31.563910, 147.154352],
    [-33.727111, 150.371124],
    [-33.848588, 151.209834],
    [-33.851702, 151.216968],
    [-34.671264, 150.863657],
    [-35.304724, 148.662905],
    [-36.817685, 175.699196],
    [-36.828611, 175.790222],
    [-37.750000, 145.116667],
    [-37.759859, 145.128708],
    [-37.765015, 145.133858],
    [-37.770104, 145.143299],
    [-37.773700, 145.145187],
    [-37.774785, 145.137978],
    [-37.819616, 144.968119],
    [-38.330766, 144.695692],
    [-39.927193, 175.053218],
    [-43.999792, 170.463352]
];
var jobNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

var markers = new L.MarkerClusterGroup();

for (i = 0; i < locations.length; i++) {

    var marker = L.marker(locations[i]);
    marker.bindPopup("<b>Case Number</b><br>" + jobNo[i]).openPopup();
    markers.addLayer(marker);
}
mymap.addLayer(markers);