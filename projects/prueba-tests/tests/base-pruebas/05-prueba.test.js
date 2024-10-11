/* eslint-disable no-undef */
import getImagen from "../../src/logic/05-prueba"

describe('Pruebas en 05-prueba', () => { 
    
    test('getImagen debe devolver el url de la imagen', async () => { 
        
        const url = await getImagen()
        
        expect( typeof url ).toBe('string')

     })

 })