
import PropTypes from 'prop-types'
import { NavBar, SideBar } from "../components"
import { Box, Toolbar } from "@mui/material"

const drawerWidth = 280

export const JournalLayout = ({ children }) => {
  return (
    
    <Box sx={{ display: 'flex'}} className='animate__animated animate__fadeIn animate__faster'>

        <NavBar drawerWidth={ drawerWidth }/>

        <SideBar drawerWidth={ drawerWidth }/>

        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >

                <Toolbar />

                { children }

        </Box>

    </Box>
  )
}

JournalLayout.propTypes = {
    children: PropTypes.array
}
