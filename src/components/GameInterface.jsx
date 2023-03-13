import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "../context/GameContext";
import Countdown from "./Countdown";

const GameInterface = ({gameType, cityToBeGuessed }) => {
    const inputRef = useRef(null);
    const {isGameOn, setTypedCity, score} = useContext(GameContext);
    
    /*useEffect(() => {
        if() {

        }
    }, []);*/
    
    return (
        <div className="absolute text-center top-40 w-full z-20">
            <div className="inline-flex space-x-6">
                <div>
                    <Countdown/>
                </div>
            </div>
        </div>
    );
};

export default GameInterface;