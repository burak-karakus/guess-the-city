import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "leaflet/dist/leaflet.css"
import ContextProvider from './context/GameContext'
import './styles.css'
import "leaflet/dist/leaflet";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
 