
import PropTypes from 'prop-types'
import { checkingCredentials, login, logout } from './authSlice'
import { signInWithGoogle } from '../../firebase/providers'

export const checkingAuthentication = () => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() )

    }
}

export const startGoogleSignIn = ( ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )
        
        const result = await signInWithGoogle()
        if( !result.ok ) dispatch ( logout( result.errorMessage ) )

        dispatch( login( result ) )
    }
}

checkingAuthentication.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string
}