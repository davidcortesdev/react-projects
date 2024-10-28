/* eslint-disable no-undef */
import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/02-useEffect/hooks/useForm"

describe('Pruebas en useForm', () => { 
    
    test('Debe retornar la información por defect', () => { 
        
        const initialForm = {
            name: 'David',
            email: 'david@gmail.com'
        }

        const { result } = renderHook( () => useForm(initialForm))
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
          })
    })

    
    test('Debe cambiar el nombre del formulario', () => { 

        const newValue = 'Pepe'
        const initialForm = {
            name: 'David',
            email: 'david@gmail.com'
        }
        
        const { result } = renderHook( () => useForm(initialForm))
        const { onInputChange } = result.current

        act( () => { 
            onInputChange({ target: {name: 'name', value: newValue}}) 
        })

        expect( result.current.name).toBe(newValue)
        expect( result.current.formState.name).toBe(newValue)
    })


    test('Debe realizar el reset del formulario', () => { 

        const newValue = 'Pepe'
        const initialForm = {
            name: 'David',
            email: 'david@gmail.com'
        }
        
        const { result } = renderHook( () => useForm(initialForm))
        const { onInputChange, onResetForm } = result.current

        act( () => { 
            onInputChange({ target: {name: 'name', value: newValue}}) 
            onResetForm()
        })

        expect( result.current.name).toBe(initialForm.name)
        expect( result.current.formState.name).toBe(initialForm.name)
    })
})