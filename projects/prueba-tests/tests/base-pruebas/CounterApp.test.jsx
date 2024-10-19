/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import CounterApp from './../../src/CounterApp'

describe('Pruebas en <CounterApp />', () => { 
    
    const initialValue = 100
    const initialValue2 = 100
    
    test('Debe hacer match con el snapshot', () => { 
        
        
        const {container} = render( <CounterApp contad={initialValue}/>)
        expect(container).toMatchSnapshot()
        console.log(initialValue)
     })

     test('Debe inicializar el contador a 100', () => { 
        render( <CounterApp contad={ 100 }/>)
        expect( screen.getByText(100)).toBeTruthy()
        //expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('100')
      })

      
      test('Debe de incrementar con el botón +1', () => {   
        render( <CounterApp contad={initialValue} />)
        fireEvent.click( screen.getByText('+1'))
        expect( screen.getByText(101)).toBeTruthy()
       })
       

       test('Debe de decrementar con el botón -1', () => { 
        render( <CounterApp contad={initialValue} />)
        fireEvent.click( screen.getByText('-1'))
        //screen.debug()
        expect( screen.getByText(99)).toBeTruthy()
       })

       test('Debe de resetear a 0 el contador', () => { 
        render( <CounterApp contad={initialValue2} />)
        fireEvent.click( screen.getByRole('button', { name: 'btn-suma' }) )
        fireEvent.click( screen.getByRole('button', { name: 'btn-suma' }) )
        //fireEvent.click( screen.getByText('Reset'))
        //Ponemos aria-label en el boton para que lo coja como name: btn-reset
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) )
        screen.debug()
        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain(`${initialValue2}`)
       })

 }) 