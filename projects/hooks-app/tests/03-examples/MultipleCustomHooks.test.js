/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/03-examples/hooks/useFetch"
import { useCounter } from "../../src/01-useState/hooks/useCounter"


jest.mock('../../../src/03-examples/hooks/useFetch')
jest.mock('../../../src/01-useState/hooks/useCounter')

describe('Prueba en <MultipleCustomHooks />', () => { 

    const mockIncrement = jest.fn()

        useCounter.mockReturnValue({ 
            counter: 1,
            onIncrement: mockIncrement
        });

        beforeEach( () => {
            jest.clearAllMocks()
        })


    test('Debe mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({ 
            data: null, 
            isLoading: true })
        
        render( <MultipleCustomHooks />) 

        expect( screen.getByText('Información de Pokémons'))
        expect( screen.getByText('Cargando...'))

        const anteriorButton = screen.getByRole('button', {name: 'Anterior'})
        const siguienteButton = screen.getByRole('button', {name: 'Siguiente'})
        
        expect( anteriorButton.disabled ).toBeFalsy()
        expect( siguienteButton.disabled ).toBeFalsy()
     })


     test('Debe mostrar un Pokemon Card.', () => { 
        
        useFetch.mockReturnValue({ 
            data: { 
                id: 321,
                name: 'Pikachu', 
                sprites: {
                    front_default: 'url_front_default',
                    back_default: 'url_back_default',
                    front_shiny: 'url_front_shiny',
                    back_shiny: 'url_back_shiny',
                }
            }, 
            isLoading: false 
        });

        render( <MultipleCustomHooks />)
        expect( screen.getByText('#321 - Pikachu')).toBeTruthy()

        screen.debug()
      })


      test('Debe llamar la función de incrementar.', () => { 
        
        useFetch.mockReturnValue({ 
            data: { 
                id: 321,
                name: 'Pikachu', 
                sprites: {
                    front_default: 'url_front_default',
                    back_default: 'url_back_default',
                    front_shiny: 'url_front_shiny',
                    back_shiny: 'url_back_shiny',
                }
            }, 
            isLoading: false 
        });

        render( <MultipleCustomHooks />)   
        const siguienteButton = screen.getByRole('button', {name: 'Siguiente'})
        fireEvent.click( siguienteButton )

        expect( mockIncrement ).toHaveBeenCalled()
       })
 })