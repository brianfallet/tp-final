import { Avatar, ListItemAvatar, ListItemButton, ListItemText, Stack } from "@mui/material"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../../constants/PageRoutes";
import stringAvatar from "../../../utils/stringAvatar";

export const SupplierItem = ({ id, name, cuit }) => {

    const navigate = useNavigate()

    const goToSupplierDetail = () => {
        navigate(`${PageRoutes.suppliers}/${id}`)
    }
    return (
        <ListItemButton onClick={goToSupplierDetail} >
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

SupplierItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    cuit: PropTypes.number,
}