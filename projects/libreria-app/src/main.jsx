import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/Menu.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter  future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppRouter />
      </BrowserRouter>
  </StrictMode>,
)
