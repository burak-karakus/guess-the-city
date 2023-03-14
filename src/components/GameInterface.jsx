import React, { useContext, useEffect, useRef } from "react";
import { TYPING } from "../constants";
import { GameContext } from "../context/GameContext";
import Countdown from "./Countdown";
import Score from "./Score";

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
                <div>
                    {gameType == TYPING ? (
                        <input type="text" ref={inputRef} onChange={(e) => setTypedCity(e.target.value)}
                        className="px-6 py-3 w-96 rounded-lg appearance-none border-none outline-none text-primaryDark font-bold text-2xl text-center shadow-amber-900/40 shadow-xl" />
                    ) : (
                        <input type="text" readOnly value={cityToBeGuessed}
                        className="px-6 py-3 w-96 rounded-lg appearance-none border-none outline-none text-primaryDark font-bold text-2xl text-center shadow-amber-900/40 shadow-xl"/>
                    )}
                </div>
                <div>
                    <Score/>
                </div>
            </div>
        </div>
    );
};

export default GameInterface;