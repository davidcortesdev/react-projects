/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/08-useReducer/hooks/useTodo"

jest.mock('../../src/08-useReducer/hooks/useTodo')

describe('Pruebas en <TodoApp />', () => { 

    useTodo.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo #1', done: false},
            {id: 2, description: 'Todo #2', done: true}
        ], 
        todosCount: 2,
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(),
        handleNewTodo: jest.fn(), 
        handleToggleTodo: jest.fn()
    })
    
    test('Debe mostrar el componente correctamente', () => { 
        
        render( <TodoApp />)
        
        expect(screen.getByText('Todo #1')).toBeTruthy()
        expect(screen.getByText('Todo #2')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()
     })
 })