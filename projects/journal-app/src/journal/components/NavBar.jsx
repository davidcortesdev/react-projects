import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'


export const NavBar = ({ drawerWidth }) => {

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch( startLogout() )
    }

  return (
    
    <AppBar
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
         }}
    >

        <Toolbar>
            <IconButton 
                color='inherit'
                edge='start'
                sx={{ mr: 2, display: { sm: 'none' }}}>

                <MenuOutlined />

            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> Mi diario </Typography>
            </Grid>

            <IconButton color='error' onClick={ onLogout }>
                <LogoutOutlined/>
            </IconButton>

        </Toolbar>

    </AppBar>
  )
}

NavBar.propTypes = {
    drawerWidth: PropTypes.number
}