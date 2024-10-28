/* eslint-disable no-undef */
import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/01-useState/hooks/useCounter"

describe('Pruebas en useCounter', () => { 
    test('Debe retornar los valores por defecto', () => { 
        const { result } = renderHook( () => useCounter())
        const { counter, onDecrement, onIncrement, onReset } = result.current

        expect( counter ).toBe(10)
        expect( onDecrement ).toEqual( expect.any( Function ))
        expect( onIncrement ).toEqual( expect.any( Function ))
        expect( onReset ).toEqual( expect.any( Function ))
     })


     test('Debe generar el counter con el valor de 100', () => { 
        const { result } = renderHook( () => useCounter(100))
        const { counter } = result.current
        expect( counter ).toBe( 100 )
      })


      test('Debe de incrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100))
        const { counter, onIncrement } = result.current
        act(() => { onIncrement() })
        expect( result.current.counter ).toBe( counter + 1 )
       })


       test('Debe de incrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100))
        const { counter, onDecrement } = result.current
        act(() => { onDecrement() })
        expect( result.current.counter ).toBe( counter - 1 )
       })


       test('Debe de devolver el valor inicial', () => { 
        const initialValue = 20
        const { result } = renderHook( () => useCounter(initialValue))
        const { onReset, onDecrement } = result.current
        act(() => { 
            onDecrement() 
            onReset() 
        })
        expect( result.current.counter ).toBe( initialValue )
       })
 })