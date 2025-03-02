import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { startLoginWithEmailPassword } from "../../store/auth"

const formData = {
  email: '',
  password: '',
}


export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth)

  const dispatch = useDispatch()
  const { email, password, onInputChange} = useForm(formData)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = ( event ) => {
    event.preventDefault()
    dispatch( startLoginWithEmailPassword( {email, password} ) )
  }




  return (
    <AuthLayout title="Login">
      <form 
        onSubmit={ onSubmit }
        className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={ onInputChange } />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={ onInputChange } />
            </Grid>
            
            <Grid container>
              <Grid item xs={12} sx={{ mt: 1 }} display={ errorMessage ? '' : 'none' }>
                <Alert severity="error"> { errorMessage } </Alert>
              </Grid>
            </Grid> 


            <Grid container spacing={0.5} sx={{ mb: 2, mt: 2 }}>
              
              <Grid item xs={12} sm={12}>
                <Button
                  disabled={ isAuthenticating }
                  type='submit'
                  variant="contained" 
                  fullWidth>
                  <Typography > Login </Typography>
                </Button> 
              </Grid>

              

            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>

        </form>
    </AuthLayout>
        


  )
}
