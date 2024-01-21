import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async';
import WishlistProvider from './Context/WishlistContext.jsx'
import BasketProvider from './Context/basketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <WishlistProvider>
          <BasketProvider>
            <App />  
          </BasketProvider>
        
        </WishlistProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
