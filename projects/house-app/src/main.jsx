import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HouseMenu } from './HouseMenu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HouseMenu />
  </StrictMode>,
)
