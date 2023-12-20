import { Paper, Stack, Typography, styled } from "@mui/material"
import PropTypes from 'prop-types'

const PaperStyled = styled(Paper)(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
}));

export const HomeCountItem = ({ label, count }) => {
    return (
        <PaperStyled variant="outlined">
            <Stack spacing={2}>
                <Typography variant="h6">{label}</Typography>
                <Typography variant="h4" color="primary">{count}</Typography>
            </Stack>
        </PaperStyled>
    )
}

HomeCountItem.propTypes = {
    label: PropTypes.string,
    count: PropTypes.number
}