import { MapContainer, TileLayer } from "react-leaflet";

export const MapViewer = () => {
  return (
    <MapContainer
      center={[35.6895, 139.6917]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
