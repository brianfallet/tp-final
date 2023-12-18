import { useEffect, useState } from "react"
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import { ServicesRoutes } from "../../constants/ServicesRoutes";
import { Loading } from "../../components/Loading";
import { ProductItem } from "./components/ProductItem";
import { Button, Paper, Stack, } from "@mui/material";
import { PageTemplate } from "../layout/PageTemplate";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../constants/PageRoutes";

export const ProductsPage = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { getAccessTokenSilently } = useAuth0();

    const goToNewProduct = () => {
        navigate(PageRoutes.productNew)
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

    return (
        <PageTemplate title="Productos">
            <Paper elevation={0} sx={{display: 'flex', p: 2, mb: 4, flexDirection: 'row'}}>
                <Button variant="contained" onClick={goToNewProduct}>
                    Crear nuevo
                </Button>
            </Paper>
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
        </PageTemplate>
    )
}