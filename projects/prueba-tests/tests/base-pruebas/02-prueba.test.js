import { retornaArreglo } from "../../src/logic/02-prueba"

/* eslint-disable no-undef */
describe('Pruebas en 02-prueba', () => { 
    
    test('Debe retornar un arreglo', () => { 
        

        const [letters, numbers] = retornaArreglo()

        expect( typeof letters ).toBe( 'string' )
        expect( typeof numbers ).toBe( 'number' )

        //expect( letters ).toBe( expect.any(String))
        //expect( numbers ).toBe( expect.any(Number))


     })

 })