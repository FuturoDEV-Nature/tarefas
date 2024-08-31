import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const divPrincipal = document.getElementById('root');

createRoot(divPrincipal).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
