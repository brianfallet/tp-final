import { Box, styled, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { DrawerMenu } from './Drawer';
import { useState } from 'react';
import { CustomAppBar } from './CustomAppBar';

const BoxBase = styled(Box)({
    display: 'flex',
    flexGrow: 1,
});

const BoxMain = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
}));


export const BaseLayout = () => {
    const [drawerOpened, setDrawerOpened] = useState(true);

    const handleMenuIconClick = () => {
        setDrawerOpened((value) => !value);
    };

    return (
        <BoxBase>
            <CustomAppBar onMenuIconClick={handleMenuIconClick} />
            <DrawerMenu open={drawerOpened} />
            <BoxMain component="main">
                <Toolbar />
                <Outlet />
            </BoxMain>
        </BoxBase>
    );
};
