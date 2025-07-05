import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import MealPlannerApp from './components/MainPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MealPlannerApp />
  </StrictMode>,
)