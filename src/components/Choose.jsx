import React, { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import { AnimatePresence, motion } from "framer-motion";
import { TYPING } from "../constants";



 const Choose = ({setGameType}) => {
    const [showModal, setShowModal] = useState(true); 
    
    const {setIsGameOn} = useContext(GameContext);
    
    const chooseHandler = (gameType) => {
        setGameType(gameType);
        setShowModal(false);
        setIsGameOn(true);
    }

    const backdrop = {
        
        visible: {opacity: 1},
        hidden: {opacity: 0}
    };

    const modal = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "-50px",
            opacity: 1,
            transition: { delay: 0.5},
            
        }
    };

    return (
         <>
            <AnimatePresence wait={true}>
                { showModal && (
                <motion.div
                    className="absolute inset-0 flex justify-center items-center z-10 w-full h-full backdrop-blur-md bg-white/30"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    >
                        <motion.div
                            className="w-96 h-48 rounded-lg bg-gradient-to-bl from-cyan-500 to-emerald-500 z-20 shadow-amber-900/40 shadow-xl border-black"
                            variants={modal}
                        >
                            <h3 className="text-center text-2xl font-bold text-primaryLight"> Guess The City</h3>
                            <h2 className="text-center text-primaryLight font-bold "> by</h2>
                            <div className="flex justify-around items-center mt-2">
                                <button onClick={() => chooseHandler(TYPING)}>a</button>
                                <button>b</button>
                            </div>
                        </motion.div>

                </motion.div>     
                )}

            </AnimatePresence>
         </>
     );
 };

 export default Choose;