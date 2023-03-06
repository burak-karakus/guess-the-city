import React from 'react';

import Map from './components/Map'
import { cities } from './data/cities';


const App = () => {

  const generateRandomCity = () => {
    return cities.features[Math.floor(Math.random() * cities.features.length)].properties.NAME;
  }

  return (
    <div>
      <Map /> 
    </div>
    //<div className='min-h-screen bg-gradient-to-b from-green-500 to-pink-500'>
       //<div>test</div>
       
       
    //</div>
  );
};

export default App
