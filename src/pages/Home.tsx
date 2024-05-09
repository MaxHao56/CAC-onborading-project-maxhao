
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";  
import '../styles/home.css'



const Home = () => {

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{ height: "955px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}  >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

    </MapContainer>
    




  );
};

export default Home;

