import { Container, Stack, Grid, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

const ContainerContent = styled(Container)(({ theme }) => ({
    padding: theme.spacing(3),
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    height: '100%',
}));

const ImgStyled = styled('img')(() => ({
    maxHeight: '90vh',
}));

const GridImageItem = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.grey[50],
    justifyContent: 'center',
    [theme.breakpoints.up('xs')]: {
        display: 'none',
    },
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

export const LoginPageLayout = () => {
    return (
        <Grid container spacing={0}>
            <GridImageItem item md={7}>
                <ImgStyled src="/images/login.svg" alt="" />
            </GridImageItem>
            <Grid item xs={12} md={5}>
                <ContainerContent maxWidth="sm">
                    <Stack component="main" sx={{ flexGrow: 1 }}>
                        <Outlet />
                    </Stack>
                </ContainerContent>
            </Grid>
        </Grid>
    );
};