/* eslint-disable no-undef */
import { renderHook, waitFor } from '@testing-library/react'
import { useLoadGifs } from '../../src/hooks/useLoadGifs'

describe('Pruebas en useLoadsGifs()', () => { 
    
    test('Debe devolver el estado inicial', () => { 
        
        const { result } = renderHook( () => useLoadGifs( 'One Punch' ) )
        const { gifs, isLoading } = result.current

        expect( gifs.length ).toBe(0)
        expect( isLoading ).toBe(true)

    })


    test('Debe devolver un arreglo de imagenes y isLoading en false', async() => { 
        
        const { result } = renderHook( () => useLoadGifs( 'One Punch' ) )

        //espera a que los gifs sean mayor a 0 y entonces evalua el resultado.
        await waitFor(
            () => expect( result.current.gifs.length ).toBeGreaterThan(0)
        )

        const { gifs, isLoading } = result.current

        expect( gifs.length ).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy()

    })
 })