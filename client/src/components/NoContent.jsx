import { Box, Typography } from "@mui/material"

export const NoContent = () => {
    return (
        <Box sx={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Typography>No hay contenido para mostrar</Typography>
        </Box>
    )
}