import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Nombre"
                type="text"
                placeholder="Tu nombre"
                fullWidth />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth />
            </Grid>


            <Grid container sx={{ mb: 2, mt: 2 }} gap={1} justifyContent="space-between">
              
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
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
