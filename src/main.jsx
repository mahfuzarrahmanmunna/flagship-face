import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { route } from './Routers/Router.jsx'



createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} />
)
