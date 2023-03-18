import React, { useContext} from "react";
import { LOCALSTORAGE_SCORE, TYPING } from "../constants";
import { GameContext } from "../context/GameContext";


const Result = ({cityToBeGuessed, gameType}) => {
    const {score, setIsGameOn} = useContext(GameContext);

    const answerOfTypingCity = () => {
        if(gameType == TYPING)
        {
            return (
                <div className="text-white font-extrabold">
                    Cevap: {" "} {cityToBeGuessed}
                </div>
            );
        }
    }

    const bestScore = () => {
        const scoreFromLocalStorage = parseInt(localStorage.getItem(LOCALSTORAGE_SCORE));
        return (<div>
            Bugüne kadarki en yüksek scorunuzu: {" "}
            <span className="text-sky-500 font-extrabold">
                {scoreFromLocalStorage ? scoreFromLocalStorage : "yok =("}
            </span>
        </div>);
    };

    const message = () => {
        
        if(score === 0) {
            return (
                <div className="text-xl" >
                    Tüh <span className="text-pink-500 font-bold ">{score}</span> puan ama olsun
                    <br/>
                    {bestScore()}
                    <br/>
                    Bir daha deneyin bakalım?
                </div>
            );
        }
        else if(score > 0 && score < 3){
            return (
                <div className="text-xl">
                    Fena değil! Puanınız {" "}
                    <span className="text-pink-500 font-bold">{score}</span> !
                    <br/>
                    {bestScore()}
                    <br/>
                    Yeniden oynamak ister misiniz?
                </div>
            );
        }
        else {
            return (
                <div className="text-xl">
                    Müthiş! Puanınız {" "}
                    <span className="text-pink-500 font-bold">{score}</span> !
                    <br/>
                    {bestScore()}
                    <br/>
                    Yeni bir rekor denemesi?
                </div>
            );
        }
    };

    return ( 
        <div className="absolute top-1/2 left-1/2 -translate-y-40 -translate-x-1/2 bg-gradient-to-b from-slate-600 to-slate-800 rounded-lg shadow-xl p-4 text-primaryLight flex flex-col justify-center items-center text-center space-y-4 z-30">
            {answerOfTypingCity()}
            {message()}
            <button className="mt-4" onClick={() => setIsGameOn(false)}>
                <svg 
                className="fill-primaryLight mx-auto h-10 w-full"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z"/>
                </svg>
            </button>
        </div>
    );

};

export default Result;