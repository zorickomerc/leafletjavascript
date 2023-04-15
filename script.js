var myMap = L.map('map');
myMap.setView([37.974, 23.72], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{ attribution:
'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//map1 
var map1 = L.map('map1').setView([38.736, -9.142], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map1);
//map2 
var map2 = L.map('map2').setView([52.36, 4.904], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map2);
//map3
let map3 = L.map('map3').setView([46.0569, 14.5058], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map3)