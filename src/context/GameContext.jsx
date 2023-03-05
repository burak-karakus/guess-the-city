import {  createContext, useState } from "react";

export const GameContext = createContext({
    countdown: COUNTDOWN_SECONDS = 7,
    setCountdown: () => {},
    isGameOn: false,
    setIsGameOn: () => {},
    clickedCity: "",
    setClickedCity: () => {},
    typedCity: "",
    setTypedCity: () => {},
    score: 0,
    setScore: () => {}
});

const ContextProvider = () => {
    const [countdown, setCountdown] = useState(7);
    const [isGameOn, setIsGameOn] = useState(false);
    const [clickedCity, setClickedCity] = useState("");
    const [typedCity, setTypedCity] = useState("");
    const [score, setScore] = useState(0);

    return (
        <GameContext.Provider value={{
            countdown,
            setCountdown,
            isGameOn,
            setIsGameOn,
            clickedCity,
            setClickedCity,
            typedCity,
            setTypedCity,
            score,
            setScore
        }}>
            {children}
        </GameContext.Provider>
    );
};

export default ContextProvider;