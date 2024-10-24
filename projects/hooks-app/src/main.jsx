import { createRoot } from 'react-dom/client'
import './index.css'
//import { Padre } from './07-tarea-memo/Padre'
//import { Memorize } from './06-memos/Memorize'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCoustomHook } from './01-useState/CounterWithCoustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallbackHook } from './06-memos/CallbackHook'
//import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'

createRoot(document.getElementById('root')).render(
  <>
    <TodoApp />
  </>
)
