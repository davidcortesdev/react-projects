import { getHeroeById, getHeroeByOwner } from "../../src/logic/03-prueba"
import heroes from "../../src/data/heroes"

/* eslint-disable no-undef */
describe('Purebas en 03-prueba', () => { 
    
    test('getHeroeById debe retornar un héroe por ID', () => { 
        
        const id = 2
        const {owner,name} = getHeroeById(id)

        console.log(name)
        console.log(owner)

        expect(typeof name).toBe('string')
        expect(typeof owner).toEqual('string')


        const myHeroe = getHeroeById(id)
        expect(myHeroe).toEqual({id: 2, name: 'Spiderman',owner: 'Marvel'})

     })

     test('getHeroeById debe retornar undefined si no existe ID', () => { 
        
        const id = 100;
        const hero = getHeroeById(id)

        //expect( hero ).toEqual(undefined)
        expect( hero ).toBeFalsy() //null o undefined (false no lo coge)

     })


     test('getHeroeByOwner debe retornar arreglo con heroes DC', () => { 
        
        const owner1 = 'DC';
        const myheroes = getHeroeByOwner(owner1)

        expect(myheroes).toEqual(heroes.filter(heroe => heroe.owner == owner1))

        expect( myheroes.length ).toEqual( 3 )

     })


     test('getHeroeByOwner debe retornar arreglo con heroes Marvel', () => { 
        
        const owner1 = 'Marvel';
        const myheroes = getHeroeByOwner(owner1)

        expect(myheroes).toEqual(heroes.filter(heroe => heroe.owner == owner1))

        expect( myheroes.length ).toEqual( 2 )

     })
 })