import React, {useEffect, useRef, useContext} from "react";
import L from "leaflet";
import {cities} from "../data/cities";
import { GameContext } from "../context/GameContext";

const Map = ({cityToBeGuessed, gameType}) => {
    const { isGameOn, setClickedCity} = useContext(GameContext);
    const mapRef = useRef(null);
 
    const initializeMap = () => {
        mapRef.current = L.map("map").setView([38.505, 35.4], 6);
    
        L.tileLayer(
            "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
            {
                maxZoom: 18
            }
        ).addTo(mapRef.current);
    };
    
    useEffect(() => {
        initializeMap()
    }, []);

    useEffect(() => {
        if(!isGameOn) {
            L.geoJSON(cities.features, {
                style: () => {
                    return {color: "#fff", fillColor: "#EF33DEFF"};
                }
            }).addTo(mapRef.current);
        }
    }, [isGameOn, gameType]);

    return  <div id="map" className="h-screen w-full z-0"></div>;
    
};

export default Map;


