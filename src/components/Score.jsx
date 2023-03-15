import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameContext";
import { motion, useAnimation } from "framer-motion";
import { LOCALSTORAGE_SCORE } from "../constants";

const Score = () => {
    const { score } = useContext(GameContext);
    const [isAnimating, setIsAnimating] = useState(false);

    const controls = useAnimation();

    const updateLocalStorage = () => {

        const initialScore = localStorage.getItem(LOCALSTORAGE_SCORE);
        
        if(!initialScore && score > 0) {
            localStorage.setItem(LOCALSTORAGE_SCORE, score);
            return;
        }

        if(parseInt(initialScore) < score) {
            localStorage.setItem(LOCALSTORAGE_SCORE, score);
        }
    };

    useEffect(() => {
        if(score > 0) {
            updateLocalStorage();
            setIsAnimating(true);
            controls.start({
                rotate: [0, 360],
                scale: [1, 1.4, 1],
                borderRadius: ["20%", "50%", "50%", "20%"]
            }).then(() => {
                setIsAnimating(false);
            });
        }
    }, [score]);

    return ( 
        <motion.div
            key={score}
            initial={false}
            animate={controls}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration:0.5

            }}
            className={
                "w-14 h-14 text-primaryLight bg-pink-600 font-bold text-4xl flex justify-center items-center rounded-lg border-white border-2 " + `${isAnimating ? "" : "shadow-amber-900/40 shadow-xl"}`
            }
        >
            {score}
    </motion.div>
    );
};

export default Score;