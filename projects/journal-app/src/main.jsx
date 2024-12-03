import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter  future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <JournalApp />
    </BrowserRouter>
  </StrictMode>,
)
