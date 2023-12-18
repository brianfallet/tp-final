import { Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material"
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../../constants/PageRoutes";

export const ProductItem = ({ id, name, salePrice, imageUrl }) => {

    const navigate = useNavigate()

    const goToProductDetail = () => {
        navigate(`${PageRoutes.products}/${id}`)
    }

    return (
        <Card sx={{p: 2}} variant="outlined">
            <CardActionArea>
                <CardContent onClick={goToProductDetail}>
                    <Stack direction="row" spacing={4}>
                        <img src={imageUrl} height="200px" />
                        <Stack>
                            <Typography variant="h6">{name}</Typography>
                            <Stack direction="row" alignItems="center">
                                <Typography variant="body1">Precio:</Typography>
                                <Typography variant="h6">{salePrice}</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

ProductItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    salePrice: PropTypes.number,
    imageUrl: PropTypes.string
}