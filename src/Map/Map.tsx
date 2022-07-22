import React, { ReactElement, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

if (
  process.env["REACT_APP_MAPBOX_KEY"] &&
  process.env.NODE_ENV === "development"
) {
  mapboxgl.accessToken = process.env["REACT_APP_MAPBOX_KEY"];
}

export function Map(): ReactElement {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;

    // @ts-ignore
    map.current = new mapboxgl.Map({
      // @ts-ignore
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div
      ref={mapContainer}
      className="map-container"
      style={{ height: "100vh", width: "100vw" }}
    />
  );
}
