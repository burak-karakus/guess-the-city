import React, {useEffect, useRef, useContext} from "react";
import L from "leaflet";
import {cities} from "../data/cities";
import { GameContext } from "../context/GameContext";
import { CLICKING } from "../constants";

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
                },
                onEachFeature: (_, layer) => {
                    layer.on("click", (e)=> {
                        setClickedCity(e.target.feature.properties.NAME)
                    });
                    layer.on("mouseover", () => {
                        //if(true || gameType == CLICKING) {
                            layer.setStyle({
                                fillColor: "#0000ff"
                            });
                        //}
                    });
                    layer.on("mouseout", () => {
                        //if(gameType == CLICKING) {
                            layer.setStyle({
                                fillColor: "#EF33DEFF"
                            });
                       // }
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


    /*useEffect(() => {
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
    })*/

    return  <div id="map" className="h-screen w-full z-0"></div>;
    
};

export default Map;


