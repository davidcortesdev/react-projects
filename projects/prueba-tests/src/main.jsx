import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import CounterApp from './CounterApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <CounterApp />
    
    {/* <FirstApp       
          subtitle='Hola, soy Vegeta' 
          description='Hola, esta es la descripción de mis saiyans'/> */}

  </StrictMode>
)
