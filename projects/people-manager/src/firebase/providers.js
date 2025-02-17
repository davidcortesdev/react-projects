import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { FirebaseAuth } from "./config"


export const registerUser = async({ email, password, nombre,  }) => {
    try {
        
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password )
        console.log('Respuesta: ' + resp)
        const { uid } = resp.user
        
        await updateProfile( FirebaseAuth.currentUser, { displayName: nombre } )

        return{
            ok: true,
            uid, email, nombre: FirebaseAuth.currentUser.displayName
        }

    } catch (error) {

        if ( error.message === 'Firebase: Error (auth/email-already-in-use).'){
            return { ok: false, errorMessage: 'Usuario ya registrado.'}}
        if ( error.message === 'Firebase: Error (auth/invalid-email).'){
            return { ok: false, errorMessage: 'Email incorrecto.'}}
        else{
            return { ok: false, errorMessage: error.message}
        }
    }
}


export const loginUser = async ({ email, password }) => {
    
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, displayName } = resp.user

        return { 
            ok: true, 
            uid, displayName
        }

    } catch (error) {

        if (error.message === 'Firebase: Error (auth/invalid-credential).'){
            return { ok:false, errorMessage: 'Usuario o contraseña incorrectos.' }
        }else{
            return { ok:false, errorMessage: error.message }
        }   
    }
}


export const logoutFirebase = async() => {
    try {
        await signOut(FirebaseAuth);
        return { ok: true };
      } catch (error) {
        return { ok: false, errorMessage: error.message };
      }
}
