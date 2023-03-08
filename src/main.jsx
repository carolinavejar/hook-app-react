import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useUsate/CounterApp'
import { CounterWithCustomHook } from './01-useUsate/CounterWithCustomHook'
import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>,
)
