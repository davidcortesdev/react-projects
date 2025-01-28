/* eslint-disable no-undef */

import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { demoUser, initialState } from "../../fixtures/authFixtures";

describe('Pruebas en authSlice', () => {
    
    test('debe de retornar el estado inicial y llamar a auth', () => {

        const state = authSlice.reducer( initialState, {} );
        
        expect(state).toEqual(initialState);
        expect(authSlice.name).toBe('auth');

    })

    test('debe de hacer login', () => {

        const state = authSlice.reducer( initialState, login( demoUser ))
        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        })

    })


    test('debe de hacer logout sin argumentos', () => {

        const state = authSlice.reducer( initialState, logout( ))
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
        })

    })


    test('debe de hacer logout y mostrar mensaje de error', () => {

        const errorMessage = 'Error al cerrar sesión'
        const state = authSlice.reducer( initialState, logout( { errorMessage } ))
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        })
    })


    test('debe cambiar el estado a checking', () => {

        const state = authSlice.reducer( initialState, checkingCredentials( ))
        expect(state.status).toBe('checking')
    })


    
})