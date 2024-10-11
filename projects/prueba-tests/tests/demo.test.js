/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */

//--COMANDOS--
//yarn add --dev jest
//yarn test para comprobar los tests
//Para que reconozca código moderno: yarn add --dev babel-jest @babel/core @babel/preset-env

//--ANOTACIONES CONFIG--
//En package.json añadimos en script el: "test": "jest --watchAll"
//IntelliSense para ver todos los atajos: yarn add -D @types/jest
//No se puede hacer test de algo que no esta exportado

//--ANOTACIONES BABEL--//
//Creamos el archivo babel.config.cjs en la raíz
// module.exports = {
//    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
//  };

describe('Pruebas en <DemoComponent />', () => {  
    test('Esta prueba no debe de fallar', ()=> {
        
        const message1 = 'Hola mundo'
        const message2 = message1.trim()

        expect( message1 ).toBe( message2 )
    })
})