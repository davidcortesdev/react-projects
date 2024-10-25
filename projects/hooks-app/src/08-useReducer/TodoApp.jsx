import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"

const initialState = [
     {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false,
    }, 
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}


export const TodoApp = () => {

    const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, init )

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        dispatchTodo({
            type: '[TODO] Add Todo',
            payload: todo
        })
    }

    const handleDeleteTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }


  return (
    <>
        <h1>TodoApp 10, <small>pendientes: 2</small></h1>
        <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo}
                        onToggleTodo={ handleToggleTodo }/>
                </div>
                
                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
    </>
  )
}
