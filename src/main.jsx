import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { route } from './Routers/Router.jsx'
import CartProvider from './Provider/CartProvider.jsx'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={route} />
    <Toaster />
  </CartProvider>
)
