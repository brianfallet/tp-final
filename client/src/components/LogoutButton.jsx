import { Button } from "@mui/material"
import { useAuth0 } from "@auth0/auth0-react"

export const LogoutButton = () => {
    const { logout } = useAuth0()

    return (
        <Button onClick={logout}>
            Logout
        </Button>
    )
}