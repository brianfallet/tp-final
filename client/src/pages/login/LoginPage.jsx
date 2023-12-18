import { Stack, Typography } from "@mui/material"
import { LoginButton } from "../../components/LoginButton.jsx"
import { LogoutButton } from "../../components/LogoutButton.jsx"

export const LoginPage = () => {
    return (
        <>
        <Stack direction="row" alignItems="center" spacing={4} justifyContent="space-between">
            <Typography variant="h4">TP Final</Typography>
            <Typography variant="h5">Brian Fallet</Typography>
        </Stack>
            <Stack sx={{height: '100%'}} justifyContent="center">
                <LoginButton />
            </Stack>
        </>
    )
}