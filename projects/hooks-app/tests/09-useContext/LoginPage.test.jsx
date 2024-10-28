/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"


describe('Pruebas en <LoginPage />', () => { 

    const user = { id: 123, name: 'David', email: 'david@gmail.com'}
    
    test('Debe mostrar el login sin el usuario', () => { 
        
        render( 
            <UserContext.Provider value={{ user: null}}>
                <LoginPage />
            </UserContext.Provider>)

        const preLab = screen.getByLabelText('pre')
        expect( preLab.innerHTML ).toBe('null')
     })



    test('Debe mostrar el login sin el usuario', () => { 
    
        render( 
            <UserContext.Provider value={{ user }}>
                <LoginPage />
            </UserContext.Provider>)

        const preLab = screen.getByLabelText('pre')
        expect( preLab.innerHTML ).toContain(user.name)
        expect( preLab.innerHTML ).toContain(user.id.toString())

    })



    test('Debe llamar al setUser al hacer click', () => { 

        const setUserMock = jest.fn()
    
        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>)

        const UserButton = screen.getByRole('button')
        fireEvent.click( UserButton )

        expect( setUserMock ).toHaveBeenCalledWith(user)
    })

 })