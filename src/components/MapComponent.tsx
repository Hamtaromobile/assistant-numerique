import { GoogleMap, LoadScript, Polygon, Circle } from "@react-google-maps/api";

// Taille de la carte : rectangle centré avec bordures
const containerStyle = {
  width: "100%",
  maxWidth: "1000px",
  height: "500px",
  margin: "0 auto",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
};

// Coordonnées légèrement au sud de Saint-Marceau pour recentrer la vue
const center = {
  lat: 48.145, // <- avant c'était 48.1623
  lng: 0.0025,
};

// Polygone de démo optionnel
const polygonCoords = [
  { lat: 48.165, lng: -0.005 },
  { lat: 48.165, lng: 0.010 },
  { lat: 48.158, lng: 0.010 },
  { lat: 48.158, lng: -0.005 },
];

export default function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCSiwf_VnbGFasBRdas8WLd5r46A2K7x7o">
      <div style={containerStyle}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={10}
        >
          {/* Polygone facultatif */}
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

          {/* Cercle de 20 km */}
          <Circle
            center={{ lat: 48.1623, lng: 0.0025 }} // le cercle reste centré sur Saint-Marceau
            radius={20000}
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
