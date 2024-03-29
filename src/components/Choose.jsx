import React, { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import { AnimatePresence, motion } from "framer-motion";
import { CLICKING, TYPING } from "../constants";



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
                                <button onClick={() => chooseHandler(TYPING)} className="choose-btn">
                                    <svg className="fill-primaryLight mx-auto h-10 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"/></svg>
                                    <div>Typing</div>
                                </button>
                                <button onClick={() => chooseHandler(CLICKING)} className="choose-btn">
                                    <svg className="fill-primaryLight mx-auto h-10 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z"/></svg>
                                    <div>Clicking</div>
                                </button>
                            </div>
                        </motion.div>

                </motion.div>     
                )}

            </AnimatePresence>
         </>
     );
 };

 export default Choose;