import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainRoute from './Root/MainRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainRoute />
  </StrictMode>,
)
