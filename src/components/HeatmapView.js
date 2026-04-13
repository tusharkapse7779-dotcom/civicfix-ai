import React from "react";
import {
  GoogleMap,
  useLoadScript,
  HeatmapLayer
} from "@react-google-maps/api";

const libraries = ["visualization"];

function HeatmapView({ issues }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    libraries
  });

  if (!isLoaded) return <p>Loading Map...</p>;

  const heatmapData = issues.map(issue => ({
    location: new window.google.maps.LatLng(
      issue.location.latitude,
      issue.location.longitude
    ),
    weight: 2
  }));

  return (
    <GoogleMap
      zoom={12}
      center={{ lat: 19.076, lng: 72.8777 }}
      mapContainerStyle={{ width: "100%", height: "400px" }}
    >
      <HeatmapLayer data={heatmapData} />
    </GoogleMap>
  );
}

export default HeatmapView;
