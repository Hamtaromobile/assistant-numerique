import { useState, useEffect } from "react";
import { GoogleMap, Polygon, Circle } from "@react-google-maps/api";

interface MapComponentProps {
  isMaximized?: boolean;
}

export default function MapComponent({ isMaximized = false }: MapComponentProps) {
  const [zoomLevel, setZoomLevel] = useState(10);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    setZoomLevel(screenWidth < 768 ? 9.3 : 10);
  }, []);

  const center = { lat: 48.17883, lng: 0.12713 };

  const polygonCoords = [
    { lat: center.lat + 0.0035, lng: center.lng - 0.005 },
    { lat: center.lat + 0.0035, lng: center.lng + 0.005 },
    { lat: center.lat - 0.0035, lng: center.lng + 0.005 },
    { lat: center.lat - 0.0035, lng: center.lng - 0.005 },
  ];

  return (
    <div
      title="Zone de couverture des prestations à domicile"
      aria-describedby="map-description"
      className={`w-full ${
        isMaximized ? "max-w-full h-[80vh]" : "max-w-[1000px] h-[570px]"
      } mx-auto rounded-xl overflow-hidden shadow-md`}
    >
   

      {/* Description non visible pour les lecteurs d’écran */}
      <div
        className="sr-only"
        role="region"
        aria-label="Carte interactive montrant la zone d’intervention autour de Saint-Marceau, dans un rayon de 25 kilomètres"
      >
        Cette carte indique la zone de couverture de vos services d’assistance informatique à domicile,
        centrée autour de Saint-Marceau (Sarthe), dans un rayon d’environ 25 km.
      </div>

      <GoogleMap
        aria-hidden="true"
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={zoomLevel}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          keyboardShortcuts: false,
        }}
      >
        <Polygon
          paths={polygonCoords}
          options={{
            fillColor: "#4287f5",
            fillOpacity: 0.3,
            strokeColor: "#4287f5",
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />
        <Circle
          center={center}
          radius={25000}
          options={{
            fillColor: "#4287f5",
            fillOpacity: 0.2,
            strokeColor: "#4287f5",
            strokeOpacity: 0.8,
            strokeWeight: 1,
          }}
        />
      </GoogleMap>
    </div>
  );
}
