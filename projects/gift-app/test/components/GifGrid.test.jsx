/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useLoadGifs } from '../../src/hooks/useLoadGifs'

jest.mock('../../src/hooks/useLoadGifs')

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch'

    test('Debe mostrar el loading inicialmente', () => { 
        
        useLoadGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })

        render( <GifGrid category={ category }/>)
        expect( screen.getByText( category ))
        expect( screen.getByText('Cargando...'))
        
     })

     test('Debe mostrar items al cargar las imágenes con useGifs()', () => { 
        
        const gifs = [
            {
                id: '123',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '234',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useLoadGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        })
        
        render( <GifGrid category={ category }/>)

        expect( screen.getAllByRole('img').length ).toBe(2)
        

      })
 })