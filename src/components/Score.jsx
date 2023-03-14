import React, { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";

const Score = () => {
    const { score } = useContext(GameContext);
    const [isAnimating, setIsAnimating] = useState(false);

    return ( 
        <div 
            className={
                "w-14 h-14 text-primaryLight bg-pink-600 font-bold text-4xl flex justify-center items-center rounded-lg border-white border-2 " + `${isAnimating ? "" : "shadow-amber-900/40 shadow-xl"}`
            }
        >
            {score}
    </div>
    );
};

export default Score;