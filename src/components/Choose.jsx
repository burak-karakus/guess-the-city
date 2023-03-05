 import { AnimatePresence, MotionConfig } from "framer-motion";
import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

 const Choose = ({setGameType}) => {
    const [showModal, setShowModal] = useState(true); 
    
    const {setIsGameOn} = useContext(GameContext);
    
    const backdrop = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    };

    const modal = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "-50px",
            opacity: 1,
            transition: { delay: 0.5}
        }
    };

    return (
         <>
            <AnimatePresence exitBeforeEnter={true}>
                {showModal && (
                <motion.div
                    className="absolute inset-0 flex justify-center items-center z-10 w-full h-full backdrop-blur-md bg-white/30"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    >

                </motion.div>     
                )

                }

            </AnimatePresence>
         </>
     );
 };

 export default Choose;