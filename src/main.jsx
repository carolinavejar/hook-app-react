import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'
// import { MemooHook } from './06-memos/MemoHook'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCUstonHook } from './03-example/MultipleCustomHook'
// import { FocusScreen } from './04-useRefs/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { CounterApp } from './01-useUsate/CounterApp'
// import { CounterWithCustomHook } from './01-useUsate/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)
