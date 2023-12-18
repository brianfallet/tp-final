import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Toolbar } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { menuOptions } from './menuOptions';
import PropTypes from 'prop-types'

function isRouteMatch(pathname, routeName) {
    if (routeName === '/') {
        return pathname === routeName;
    }
    return new RegExp(`^${routeName}(?!=[\\w])($|/)`).test(pathname);
}

const drawerWidth = 280;
const DrawerStyled = styled(Drawer)(({ theme, open }) => {
    return ({
        width: open ? drawerWidth : 0,
        flexShrink: 0,
        transition: theme.transitions.create(['transform', 'width'], {
            duration: '225ms',
            easing: 'cubic-bezier(0, 0, 0.2, 1)',
            delay: '0ms',
        }),
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
        },
    });
});

export const DrawerMenu = ({ open }) => {
    const location = useLocation();

    return (
        <DrawerStyled
            variant="persistent"
            open={open}
        >
            <Toolbar />
            <List>
                {menuOptions.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            selected={isRouteMatch(location.pathname, item.route)}
                            href={item.route}
                        >
                            <ListItemIcon>
                                {React.cloneElement(item.icon, { color: isRouteMatch(location.pathname, item.route) ? 'primary' : 'action' })}
                            </ListItemIcon>
                            <ListItemText>
                                {item.label}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </DrawerStyled>
    );
};

DrawerMenu.propTypes = {
    open: PropTypes.bool
}