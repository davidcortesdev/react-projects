import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

/* eslint-disable no-undef */
describe('Pruebas en <GifItem />', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('Match con el snapshot de <GifItem />', () => { 
        
        const {container} = render(<GifItem title={title} url={url}/>)
        expect( container ).toMatchSnapshot()

     })

     test('Debe mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render(<GifItem title={ title } url={ url }/>)
        //screen.debug()
        const {src, alt} = screen.getByRole('img') // -> screen.getByRole('img').src
        expect( src ).toBe( url )
        expect( alt ).toBe( title )

      })


      test('Debe mostrar el titulo en el componente', () => { 
        
        render(<GifItem title={ title } url={ url }/>)
        expect( screen.getByText( title )).toBeTruthy()

       })

 })