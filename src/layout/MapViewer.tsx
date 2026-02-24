import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";

export const MapViewer = () => {
  return (
    <MapContainer
      center={[35.6895, 139.6917]}
      zoom={13}
      zoomControl={false}
      className="w-full h-full z-0"
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.6895, 139.6917]} />
    </MapContainer>
  );
};
