import React, {useEffect, useRef, useContext} from "react";
import L from "leaflet";
import {cities} from "../data/cities";
import { GameContext } from "../context/GameContext";
import { CLICKING, TYPING } from "../constants";

const Map = ({cityToBeGuessed, gameType}) => {
    const { isGameOn, setClickedCity} = useContext(GameContext);
    const mapRef = useRef(null);
 
    const initializeMap = () => {
        mapRef.current = L.map("map", { 
            maxBounds : [
                [42.228, 25.154],
                [36.173, 46.029]
            ]
        }).setView([38.505, 35.4], 6);
    
        L.tileLayer(
            "https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg",
            {
                maxZoom: 18,
                
            }
        ).addTo(mapRef.current);
    };
    
    useEffect(() => {
        initializeMap()
    }, []);

    useEffect(() => {
        if(isGameOn) {
            L.geoJSON(cities.features, {
                style: () => {
                    return {color: "#fff", fillColor: "#EF33DEFF"};
                },
                onEachFeature: (_, layer) => {
                    layer.on("click", (e)=> {
                        setClickedCity(e.target.feature.properties.NAME)
                    });
                    layer.on("mouseover", () => {
                        if(gameType == CLICKING) {
                            layer.setStyle({
                                 fillColor: "#0000ff"
                            });
                        }
                    });
                    layer.on("mouseout", () => {
                        if(gameType == CLICKING) {
                            layer.setStyle({
                                fillColor: "#EF33DEFF"
                            });
                        }
                    })
                }
            }).addTo(mapRef.current);
        }
        else {
            mapRef.current.eachLayer((layer) => {
                if(layer.feature) {
                    mapRef.current.removeLayer(layer);
                }        
            });
        }
    }, [isGameOn, gameType]);


    useEffect(() => {
        if(gameType == TYPING) {
            mapRef.current.eachLayer((layer) => {
                if(layer.feature && layer.feature.properties.NAME.toLocaleLowerCase("tr") == cityToBeGuessed.toLocaleLowerCase("tr")) {
                    layer.setStyle({
                        fillColor: "#0000ff",
                        fillOpacity: 1
                    });
                }
            })
        }

        return () => {
            mapRef.current.eachLayer((layer) => {
                if(layer.feature) {
                    layer.setStyle({
                        fillColor: "#EF33DEFF",
                        fillOpacity: 0.2
                    });
                }
            })
        }
    });

    return  <div id="map" className="h-screen w-full z-0"></div>;
    
};

export default Map;


