import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./"
import PropTypes from 'prop-types'

export const SideBar = ({ drawerWidth }) => {

    const { displayName } = useSelector( state => state.auth)
    const { notes } = useSelector( state => state.journal)

  return (
    
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >

        <Drawer
            variant="permanent"
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
             }}
        >

            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    { displayName }
                </Typography>
            </Toolbar>

            <Divider />

            <List>
                {
                    notes.map( nota => (
                        <SideBarItem key={ nota.id } {...nota} />
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}


SideBar.propTypes = {
    drawerWidth: PropTypes.number
}