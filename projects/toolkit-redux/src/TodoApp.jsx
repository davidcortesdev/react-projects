import { useGetTodoQuery /*useGetTodosQuery*/ } from './store/apis'
import './App.css'
import { useState } from 'react'

export const TodoApp = () => {

  /* const { data: todos = [], isLoading } = useGetTodosQuery() */

  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading } = useGetTodoQuery(todoId)

  const nextTodo = () => {
    setTodoId( todoId + 1 )
  }

  const previousTodo = () => {
    if( todoId === 1) return
    setTodoId( todoId - 1 )
  }

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>{ isLoading ? 'Cargando' : 'Cargado' }</h4>

        <pre> {JSON.stringify( todo )} </pre>

        <h1>Title: { todo.title } </h1>


        <button onClick={ previousTodo }>
            Anterior Todo
        </button>
        <button onClick={ nextTodo }>
            Siguiente Todo
        </button>
        
        
        
        {/* <ul>
          { todos.map(todo => (
            <li key={todo.id}>
              <strong>{ todo.completed ? 'DONE:' : 'PENDING:'} </strong>
              {todo.title}
            </li>
          )) }
        </ul> */}

    </>
  )
}
