import React from 'react'
import ReactDOM from 'react-dom/client'
import './08-useReducer/intro-reducer'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode>, */}
  </BrowserRouter>
    
  
)
