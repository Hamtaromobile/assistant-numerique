import { GoogleMap, LoadScript, Polygon, Circle } from "@react-google-maps/api";

interface MapComponentProps {
  isMaximized?: boolean;  // ajoute cette interface
}

export default function MapComponent({ isMaximized = false }: MapComponentProps) {
  const containerStyle = {
    width: "100%",
    maxWidth: isMaximized ? "100%" : "1000px",
    height: isMaximized ? "80vh" : "550px",
    margin: "0 auto",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  };

  const center = {
    lat: 48.145,
    lng: 0.0025,
  };

  const polygonCoords = [
    { lat: 48.165, lng: -0.005 },
    { lat: 48.165, lng: 0.010 },
    { lat: 48.158, lng: 0.010 },
    { lat: 48.158, lng: -0.005 },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyCSiwf_VnbGFasBRdas8WLd5r46A2K7x7o">
      <div style={containerStyle}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={10}
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
