import { Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >

      <Grid item
        className="box-shadow"
        xs={3}
        sx={{
            width: { sm: 550 },
            backgroundColor: 'white',
            padding: 3, 
            borderRadius: 2
        }}>

        <Typography variant="h5" sx={{ mb: 1 }}> { title } </Typography>

            {children}

      </Grid>
    </Grid>
  )
}

AuthLayout.propTypes = {
    children: PropTypes.object,
    title: PropTypes.string,
}