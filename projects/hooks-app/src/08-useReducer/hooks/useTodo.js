import { useEffect, useReducer } from "react"
import { todoReducer } from "../todoReducer"


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



export const useTodo = () => {

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

    return {
        todos,
        handleToggleTodo,
        handleDeleteTodo,
        handleNewTodo
    }
}
