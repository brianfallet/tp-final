import { Box, CircularProgress, styled } from '@mui/material';

const BoxContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
}));

export const Loading = (props) => {
    return (
        <BoxContainer>
            <CircularProgress {...props} />
        </BoxContainer>
    )
}