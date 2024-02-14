"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

type MapProps ={
  longitude: string;
  latitude: string
}
const Map = ({longitude, latitude}: MapProps) => {
  const mapRef = React.useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_APIKEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "customer location",
      };
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      const marker = new Marker({
        map: map,
        position: position,
      });
    };
    initMap();
  }, []);

  return <div className="h-[500px]" ref={mapRef}></div>;
};

export default Map;
