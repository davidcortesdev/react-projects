import { useEffect, useReducer } from "react"
import { todoReducer } from "../todoReducer"


const initialState = []

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
        handleNewTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
    }
}
