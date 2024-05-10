import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";  
import '../styles/home.css';
const coordinates: number[][] = [
  [44.229852, -76.519158],
  [44.237066, -76.502592],
  [44.230088, -76.481707]
];

let resultx = 0;
let resulty = 0;

// Calculating the sum of latitude and longitude
for (let i = 0; i < coordinates.length; i++) {
  resultx += coordinates[i][0];
  resulty += coordinates[i][1];
}

// Calculating the average latitude and longitude
const avgLat = resultx / coordinates.length;
const avgLng = resulty / coordinates.length;



const Home: React.FC = () => {
  return (
    <MapContainer center={[avgLat, avgLng]} zoom={13} scrollWheelZoom={true} style={{ height: "955px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* Mapping through coordinates to create markers */}
      {coordinates.map((coordinate, index) => (
        <Marker key={index} position={[coordinate[0], coordinate[1]]}>
          <Popup>
            This is a marker at [{coordinate[0]}, {coordinate[1]}].
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Home;