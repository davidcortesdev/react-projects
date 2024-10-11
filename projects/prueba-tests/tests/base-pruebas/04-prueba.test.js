import { getHeroeByIdAsync } from "../../src/logic/04-prueba";

/* eslint-disable no-undef */
describe('Pruebas en 04-prueba', () => { 
    
    test('getHeroeByIdAsync debe retornar un heroe', ( done ) => { 
        
        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done();
            })

     })


     test('getHeroeByIdAsync debe obtener un error si heroe no existe', ( done ) => { 
        
        const id = 101;
        getHeroeByIdAsync(id)
            .catch( error => {

                console.log(error)
                expect(error).toBe(`No se ha podido encontrar el héroe ${id}`)

                done();
            })

     })
 })