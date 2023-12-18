import { useState } from "react";
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import PropTypes from 'prop-types'
import { Menu as MenuIcon} from '@mui/icons-material';
import { useAuth0 } from "@auth0/auth0-react";

const anchorOrigin = { vertical: 'bottom', horizontal: 'right' };
const transformOrigin = { vertical: 'top', horizontal: 'right' };

export const CustomAppBar = ({ onMenuIconClick }) => {
    const { user, logout } = useAuth0()
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        handleCloseUserMenu()
        logout()
    }

    return (
        <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label={'Menu'}
                    onClick={onMenuIconClick}
                    edge="start"
                    sx={{ marginRight: 3 }}
                >
                    <MenuIcon />
                </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Dashboard
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
                <IconButton sx={{ mr: 2 }} onClick={handleOpenUserMenu}>
                    <Avatar 
                        src={user.picture}
                    />
                </IconButton>    
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={handleLogout}>
                        <Typography textAlign="center">Cerrar sesión</Typography>
                    </MenuItem>
                </Menu>
            </Box>
            </Toolbar>
        </AppBar>
    )
}

CustomAppBar.propTypes = {
    onMenuIconClick: PropTypes.func
}