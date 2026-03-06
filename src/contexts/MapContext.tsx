import type { LineTrackType } from "@/types/LineTrack";
import type { MapView } from "@/types/MapView";
import type { MarkersType, MarkerType } from "@/types/Markers";
import { type LatLngExpression } from "leaflet";
import { createContext, useContext, useState } from "react";

type MapContextType = {
  mapView: MapView;
  markers: MarkersType;
  lineTrack: LineTrackType;
  setMapView: (view: MapView) => void;
  setMarkers: (markers: MarkersType) => void;
  setLineTrack: (lineTrack: LineTrackType) => void;
  isochronePolygons: IsochronePolygon;
  setIsochronePolygons: (isochronePolygons: IsochronePolygon) => void;
  stationLocation: MarkerType | null;
  setStationLocation: (stationLocation: MarkerType | null) => void;
};

type IsochronePolygon = {
  color?: string;
  coordinates: Array<LatLngExpression>;
};

const MapContext = createContext<MapContextType | null>(null);

const DEFAULT_MAP_VIEW: MapView = {
  latitude: 35.6895,
  longitude: 139.6917,
  zoom: 13,
};

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
  const [mapView, setMapView] = useState<MapView>(DEFAULT_MAP_VIEW);
  const [markers, setMarkers] = useState<MarkersType>([]);
  const [lineTrack, setLineTrack] = useState<LineTrackType>({
    color: undefined,
    track: [],
  });
  const [isochronePolygons, setIsochronePolygons] = useState<IsochronePolygon>({
    color: undefined,
    coordinates: [],
  });
  const [stationLocation, setStationLocation] = useState<MarkerType | null>(
    null,
  );
  return (
    <MapContext.Provider
      value={{
        mapView,
        markers,
        setMapView,
        setMarkers,
        lineTrack,
        setLineTrack,
        isochronePolygons,
        setIsochronePolygons,
        stationLocation,
        setStationLocation,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
};
