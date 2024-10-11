/* eslint-disable no-undef */
import { getUser, getUsuarioActivo } from "../../src/logic/01-prueba"

describe('Pruebas en 01-prueba', () => { 
    
    test('getUser debe retornar un objeto', () => { 
        
        const testUser = {
            uid: 'ABC',
            username: 'Daviidcl11'
        }

        const user = getUser()

        expect( testUser ).toEqual( user )


     })



     test('getUsuario debe retornar un objeto', () => { 

        const name = 'David'

        const user2 = getUsuarioActivo(name)

        expect( user2 ).toEqual( {
            uid: 'Activo',
            username: name
        } )


     })
 })