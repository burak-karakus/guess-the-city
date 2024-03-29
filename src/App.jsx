import React, {memo, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import Map from './components/Map'
import Choose from './components/Choose';
import GameInterface from './components/GameInterface';
import Result from './components/Result';
import { cities } from './data/cities';
import { GameContext } from './context/GameContext';
import { CLICKING, COUNTDOWN_SECONDS, TYPING } from './constants';


const App = () => {
  const [gameType, setGameType] = useState("");
  const [cityToBeGuessed, setCityToBeGuessed] = useState("");
  const { countdown, setCountdown, isGameOn, clickedCity, setClickedCity, typedCity, setTypedCity, score, setScore} = useContext(GameContext);

  const generateRandomCity = () => {
    return cities.features[Math.floor(Math.random() * cities.features.length)].properties.NAME;
  }

  const memoizedRandomCity = useMemo(() => generateRandomCity(), [score, isGameOn]);

  const setCityCallback = useCallback(() => {
    setCityToBeGuessed(memoizedRandomCity);
    },
    [memoizedRandomCity, score]
  );

  const gameController = () => {
    if(isGameOn && gameType == TYPING) {
      setCityCallback();
      if(cityToBeGuessed != "" && cityToBeGuessed.toLocaleLowerCase("tr") == typedCity.toLocaleLowerCase("tr"))
      {
        setScore((prevState) => prevState + 1);
        setCountdown(COUNTDOWN_SECONDS);
      }
    }
    else if(isGameOn && gameType == CLICKING)
    {
      setCityCallback();
      if(cityToBeGuessed != "" && cityToBeGuessed.toLocaleLowerCase("tr") == clickedCity.toLocaleLowerCase("tr"))
      {
        setScore((prevState) => prevState + 1);
        setCountdown(COUNTDOWN_SECONDS);
      }
    }
  };

  useEffect(() => {
    if(isGameOn) {
      gameController()
    }
  }, [isGameOn, typedCity, clickedCity]);
  
  useEffect(() => {
    if(score > 0) {
      setCityCallback();
    }
  }, [score]);

  useEffect(() => {
    if(!isGameOn) {
      setClickedCity("");
      setTypedCity("");
      setScore(0);
      setCountdown(COUNTDOWN_SECONDS);
      setGameType("");
    }
  }, [isGameOn]);

  return (
    <div className="relative">
      {!isGameOn && <Choose key="modal" setGameType={setGameType} />}
      {gameType != "" && (
        <div className={"absolute w-full " +  `${isGameOn ? "z-30" : "z-0"}`}>
          <GameInterface gameType={gameType} cityToBeGuessed={cityToBeGuessed}
          />
        </div>
      )}
      {countdown == "X" && <Result cityToBeGuessed={cityToBeGuessed} gameType={gameType}/>}
      <Map cityToBeGuessed={cityToBeGuessed} gameType={gameType}/>
    </div>
  );
};

export default App;

