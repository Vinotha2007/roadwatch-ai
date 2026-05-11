import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function ComplaintMap() {
  return (
    <MapContainer
      center={[13.0827, 80.2707]}
      zoom={10}
      style={{ height: "500px", width: "100%" }}
      className="rounded-xl"
    >
      <TileLayer
  attribution='&copy; OpenStreetMap contributors'
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
/>

      <Marker position={[13.0827, 80.2707]}>
        <Popup>
          Reported Road Damage
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default ComplaintMap;