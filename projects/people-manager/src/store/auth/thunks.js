import { checkingCredentials, login, logout } from './authSlice'
import { loginUser, logoutFirebase, registerUser } from '../../firebase/providers'
import { doc, getFirestore, setDoc } from 'firebase/firestore/lite'



export const startCreatingUser = ({ email, password, nombre, apellido1, apellido2, 
    fechaNacimiento, fechaAntiguedad, departamento, puesto }) => {
    return async (dispatch) => {
        
        dispatch( checkingCredentials() )

        const { ok, uid, errorMessage } = await registerUser({ email, password, nombre })
        
        if( !ok ) return dispatch( logout( { errorMessage } ))

        
        const db = getFirestore();
    
        await setDoc(doc(db, "users", uid), {
            email,
            nombre,
            apellido1,
            apellido2,
            fechaNacimiento,
            fechaAntiguedad,
            departamento,
            puesto,
            uid,
        });

        dispatch( login({ uid, email, nombre, apellido1, apellido2, fechaNacimiento, 
                          fechaAntiguedad, departamento, puesto }))

    }
}


export const startLogin = ({ email, password }) => {
    return async (dispatch) => {
        
        dispatch( checkingCredentials() )

        const result = await loginUser({ email, password })
        
        if ( !result.ok ) return dispatch( logout( result ) )
        
        dispatch( login( result ) )

    }
}


export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase()
        dispatch( logout() )

        
    }
}