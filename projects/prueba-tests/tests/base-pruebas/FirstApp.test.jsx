import { render } from "@testing-library/react"
import FirstApp from "../../src/FirstApp"

/* eslint-disable no-undef */
describe('Pruebas en <FirstApp />', () => { 
    
    /* test('Debe de hacer match con el snapshot', () => { 
        
        const title = 'Hola, soy Vegeta'
        const { container } = render( < FirstApp title={title}/>)
        
        expect( container ).toMatchSnapshot()

     }) */


     test('Debe moestrar el titulo en un h1', () => { 
        
        const title = 'Hola, soy Vegeta'
        const { getByText, getByTestId } = render( < FirstApp title={title}/>)
        
        expect( getByText(title) ).toBeTruthy()
        
        /* const h1 = container.querySelector('h1')
        expect(h1.innerHTML).toContain( title ) */

        expect( getByTestId('test-title').innerHTML ).toContain(title)

     })


     test('Debe mostrar el contenido enviado por props', () => { 
        
        const title = 'Hola, soy Vegeta'
        const subtitle = 'Hola, soy Goku'
        //const { getAllByText } = render( -> obtiene un array
        const { getByText } = render( 
            < FirstApp 
                title={title}
                subtitle={subtitle}
            />)
        
        expect( getByText(subtitle) ).toBeTruthy()
        //expect( getAllByText(subtitle).length ).toBe(2)
      })
 })