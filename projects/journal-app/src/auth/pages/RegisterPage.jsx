import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"


const formData = {
  email: 'david@google.com',
  password: '123456',
  displayName: 'David Cortés'
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe de tener una @.'],
  password: [ (value) => value.length >= 6 , 'La contraseña debe tener mas de 6 caracteres.'],
  displayName: [(value) => value.length >= 3, 'El nombre debe contener al menos 3 caracteres.'],
}


export const RegisterPage = () => {

  const { 
    displayName, email, password, onInputChange, formState, 
    /* isFormValid, */ displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations)


  const onSubmit = ( event ) => {
    event.preventDefault()
    console.log(formState)
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Nombre"
                type="text"
                placeholder="Tu nombre"
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ displayNameValid }
                helperText={ displayNameValid } />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ emailValid }
                helperText={ emailValid } />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={ passwordValid }
                helperText={ passwordValid } />
            </Grid>


            <Grid container sx={{ mb: 2, mt: 2 }} gap={1} justifyContent="space-between">
              
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  <Typography > Crear cuenta </Typography>
                </Button> 
              </Grid>

            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Iniciar sesión
              </Link>
            </Grid>

          </Grid>

        </form>
    </AuthLayout>
        


  )
}
