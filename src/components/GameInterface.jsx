import React, { useContext, useEffect, useRef } from "react";
import { TYPING } from "../constants";
import { GameContext } from "../context/GameContext";
import Countdown from "./Countdown";
import Score from "./Score";
import { motion } from "framer-motion";

const GameInterface = ({gameType, cityToBeGuessed }) => {
    const inputRef = useRef(null);
    const {isGameOn, setTypedCity, score} = useContext(GameContext);
    
    useEffect(() => {
        if(!inputRef.current) {
            return;
        }
        if(!isGameOn) {
            if(inputRef.current) {
                inputRef.current.disabled = true;
            }
        }
        else {
            inputRef.current.disabled = false;
            inputRef.current.focus();
        }
    }, [isGameOn]);

    useEffect(() => {
        if(!inputRef.current) {
            return;
        }
        if(score > 0) {
            inputRef.current.value = "";
        }
    }, [score]);

    const countdownOptions = {
        hidden: {
            x: "-100vw",
            y: "-50px",
            opacity: 0
        },
        visible: {
            x: 0,
            y: "-50px",
            opacity: 1 ,
            transition: {
                delay: 0.5,
                x: {type: "spring", bounce:0.1}
            }
        }
    };

    const scoreOptions = {
        hidden: {
            x: "100vw",
            y: "-50px",
            opacity: 0
        },
        visible: {
            x: 0,
            y: "-50px",
            opacity: 1 ,
            transition: {
                delay: 0.5,
                x: {type: "spring", bounce:0.1}
            }
        }
    };

    const inputBarOptions = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "-50px",
            opacity: 1 ,
            transition: {
                delay: 0.5,
                y: {type: "spring", bounce:0.55, damping: 9}
            }
        }
    };
    
    return (
        <div className="absolute text-center top-40 w-full z-20">
            <div className="inline-flex space-x-6">
                <motion.div variants={countdownOptions} initial="hidden" animate="visible">
                    <Countdown/>
                </motion.div>
                <motion.div variants={inputBarOptions} initial="hidden" animate="visible">
                    {gameType == TYPING ? (
                        <input type="text" ref={inputRef} onChange={(e) => setTypedCity(e.target.value)}
                        className="px-6 py-3 w-96 rounded-lg appearance-none border-none outline-none text-primaryDark font-bold text-2xl text-center shadow-amber-900/40 shadow-xl" />
                    ) : (
                        <input type="text" readOnly value={cityToBeGuessed}
                        className="px-6 py-3 w-96 rounded-lg appearance-none border-none outline-none text-primaryDark font-bold text-2xl text-center shadow-amber-900/40 shadow-xl"/>
                    )}
                </motion.div>
                <motion.div variants={scoreOptions} initial="hidden" animate="visible">
                    <Score/>
                </motion.div>
            </div>
        </div>
    );
};

export default GameInterface;