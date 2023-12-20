import { Avatar, ListItemAvatar, ListItemButton, ListItemText, Stack } from "@mui/material"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../../constants/PageRoutes";
import stringAvatar from "../../../utils/stringAvatar";

export const ClientItem = ({ id, name, cuit }) => {

    const navigate = useNavigate()

    const goToClientDetail = () => {
        navigate(`${PageRoutes.clients}/${id}`)
    }
    return (
        <ListItemButton onClick={goToClientDetail} >
            <ListItemAvatar>
                <Avatar {...stringAvatar(name)}/>
            </ListItemAvatar>
            <Stack>
                <ListItemText
                    primary={name}
                    secondary={`CUIT: ${cuit}`}
                />
            </Stack>
        </ListItemButton>
    )
}

ClientItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    cuit: PropTypes.number,
}