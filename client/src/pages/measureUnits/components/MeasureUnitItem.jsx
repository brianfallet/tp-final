import { Avatar, ListItemAvatar, ListItemButton, ListItemText, Stack } from "@mui/material"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../../constants/PageRoutes";
import stringAvatar from "../../../utils/stringAvatar";

export const MeasureUnitItem = ({ id, unitName, unitAbbreviation }) => {

    const navigate = useNavigate()

    const goToMeasureUnitDetail = () => {
        navigate(`${PageRoutes.measureUnits}/${id}`)
    }
    return (
        <ListItemButton onClick={goToMeasureUnitDetail} >
            <ListItemAvatar>
                <Avatar {...stringAvatar(unitAbbreviation, false)} variant="square"/>
            </ListItemAvatar>
            <Stack>
                <ListItemText
                    primary={unitName}
                    secondary={unitAbbreviation}
                />
            </Stack>
        </ListItemButton>
    )
}

MeasureUnitItem.propTypes = {
    id: PropTypes.string,
    unitName: PropTypes.string,
    unitAbbreviation: PropTypes.string,
}