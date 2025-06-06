import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../scss/style.scss';
// import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/Dr.co'>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)