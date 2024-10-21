import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '../src/styles/globalStyles'



import Router from './routes/routes'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    <GlobalStyle/>
  </StrictMode>,
)
