import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { FirebaseAuth } from "./config"

const googleProvider = new GoogleAuthProvider()


export const signInWithGoogle = async() => {
  
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult( result )

        const { displayName, email, photoURL, uid} = result.user

        return{
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        
        const errorCode = error.code
        const errorMessage = error.errorMessage

        return{
            ok: false,
            errorCode,
            errorMessage,
        }
        
    }
}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    try {
        
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password )
        const { uid, photoURL} = resp.user
        
        //TODO: actualizar el displayName en Firebase
        await updateProfile( FirebaseAuth.currentUser, { displayName } )

        return{
            ok: true,
            uid, photoURL, email, displayName
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


export const loginWithEmailPassword = async ({ email, password }) => {
    
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, displayName, photoURL} = resp.user

        return { 
            ok: true, 
            uid, displayName, photoURL
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
    return await FirebaseAuth.signOut()
}
