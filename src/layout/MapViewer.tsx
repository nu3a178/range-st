import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";

type Props = {
  markerIconUrl: string;
  iconSize?: [number, number];
  iconAnchor?: [number, number];
};

export const MapViewer = ({
  markerIconUrl,
  iconSize = [32, 32],
  iconAnchor = [16, 32],
}: Props) => {
  const icon = L.icon({
    iconUrl: markerIconUrl,
    iconSize,
    iconAnchor,
  });

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
      <Marker position={[35.6895, 139.6917]} icon={icon} />
    </MapContainer>
  );
};
