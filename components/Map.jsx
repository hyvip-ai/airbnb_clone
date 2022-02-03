import React, { useState } from "react";
import ReactMapGL, { Layer, Source, Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { LocationMarkerIcon } from "@heroicons/react/solid";
function Map({ arrayOfCoords, searchResult }) {
  const center = getCenter(arrayOfCoords);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  const [selectedLocation, setSelectedLocation] = React.useState(0);
  return (
    <ReactMapGL
      mapStyle={`mapbox://styles/hyvip-ai/ckz6od9qf002115noa3sgzip2`}
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      {...viewport}
    >
      {searchResult.map((item) => {
        return (
          <Marker
            latitude={item.lat}
            longitude={item.long}
            key={item.lat}
            onClick={() => {
              setSelectedLocation((prev) => {
                return {
                  latitude: item.lat,
                  longitude: item.long,
                  name:item.title
                };
              });
            }}
          >
            <LocationMarkerIcon className="h-8 text-red-400 cursor-pointer animate-pulse" />
          </Marker>
        );
      })}
      {selectedLocation ? (
        <Popup
          latitude={selectedLocation.latitude}
          longitude={selectedLocation.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setSelectedLocation(0)}
          anchor="bottom"
        >
          <div>{selectedLocation.name}</div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
}

export default Map;
