import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Polygon, Circle } from "@react-google-maps/api";

interface MapComponentProps {
  isMaximized?: boolean;
}

export default function MapComponent({ isMaximized = false }: MapComponentProps) {
  const [zoomLevel, setZoomLevel] = useState(10);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setZoomLevel(9.3);
    } else {
      setZoomLevel(10);
    }
  }, []);

  const center = { lat: 48.145, lng: 0.0025 };

  const polygonCoords = [
    { lat: 48.165, lng: -0.005 },
    { lat: 48.165, lng: 0.010 },
    { lat: 48.158, lng: 0.010 },
    { lat: 48.158, lng: -0.005 },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyCSiwf_VnbGFasBRdas8WLd5r46A2K7x7o">
      <div
        className={`w-full ${
          isMaximized ? "max-w-full h-[80vh]" : "max-w-[1000px] h-[550px]"
        } mx-auto rounded-xl overflow-hidden shadow-md`}
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={zoomLevel}
        >
          <Polygon
            paths={polygonCoords}
            options={{
              fillColor: "rgba(66, 135, 245, 0.3)",
              fillOpacity: 0.3,
              strokeColor: "#4287f5",
              strokeOpacity: 0.8,
              strokeWeight: 2,
            }}
          />
          <Circle
            center={{ lat: 48.1623, lng: 0.0025 }}
            radius={25000}
            options={{
              fillColor: "rgba(66, 135, 245, 0.2)",
              strokeColor: "#4287f5",
              strokeOpacity: 0.8,
              strokeWeight: 1,
            }}
          />
        </GoogleMap>
      </div>
    </LoadScript>
  );
}
