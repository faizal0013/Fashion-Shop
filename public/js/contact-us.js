'use strict';

const map = L.map('map').setView([51.505, -0.09], 13);

const marker = L.marker([51.5, -0.09]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

const polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map);

marker.bindPopup('I am a here.').openPopup();
