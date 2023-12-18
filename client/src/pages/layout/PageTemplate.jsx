import { Box, Container, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types'

const ContainerStyled = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
});

const BoxHeaderWrapper = styled(Box)(({ theme }) => ({
    paddingBottom: theme.spacing(2),
}));

export const PageTemplate = ({ title, children }) => {

    return (
        <ContainerStyled maxWidth="lg" disableGutters>
            <BoxHeaderWrapper>
                <Typography variant="h4" component="h1">
                    {title}
                </Typography>
            </BoxHeaderWrapper>
            {children}
        </ContainerStyled>
    );
};

PageTemplate.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}