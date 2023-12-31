import { useEffect, useState } from "react"
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import { ServicesRoutes } from "../../constants/ServicesRoutes";
import { Loading } from "../../components/Loading";
import { ProductItem } from "./components/ProductItem";
import { Alert, Button, Paper, Stack } from "@mui/material";
import { PageTemplate } from "../layout/PageTemplate";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../constants/PageRoutes";
import { NoContent } from "../../components/NoContent";
import SettingsIcon from '@mui/icons-material/Settings';

export const ProductsPage = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { getAccessTokenSilently } = useAuth0();

    const goToNewProduct = () => {
        navigate(PageRoutes.productNew)
    }

    const goToMeasureUnits = () => {
        navigate(PageRoutes.measureUnits)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const token = await getAccessTokenSilently();
                const response = await axios.get(ServicesRoutes.products, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setProducts(response.data.result)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [getAccessTokenSilently])

    if(isLoading) return <Loading />

    if(products === null) return <Alert severity="error">Ha ocurrido un error inesperado</Alert>

    return (
        <PageTemplate title="Productos">
            <Paper elevation={0} sx={{display: 'flex', p: 2, mb: 4, flexDirection: 'row'}}>
                <Stack direction="row" gap={4}>
                    <Button variant="contained" onClick={goToNewProduct}>
                        Crear nuevo
                    </Button>
                    <Button variant="outlined" onClick={goToMeasureUnits} startIcon={<SettingsIcon />}>
                        Unidades de medida
                    </Button>
                </Stack>
            </Paper>
            {
                !products?.length ? <NoContent/>
                :  
                <Stack spacing={2}>
                    {products.map((product) => (
                        <ProductItem 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            salePrice={product.salePrice}
                            imageUrl={product.imageUrl}
                    />
                ))}
                    </Stack>
            }
           
        </PageTemplate>
    )
}