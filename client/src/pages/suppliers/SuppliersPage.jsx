import { useEffect, useState } from "react"
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import { ServicesRoutes } from "../../constants/ServicesRoutes";
import { Loading } from "../../components/Loading";
import { Alert, Button, Paper, Stack } from "@mui/material";
import { PageTemplate } from "../layout/PageTemplate";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../constants/PageRoutes";
import { NoContent } from "../../components/NoContent";
import { SupplierItem } from "./components/SupplierItem";

export const SuppliersPage = () => {
    const navigate = useNavigate()
    const [suppliers, setSuppliers] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { getAccessTokenSilently } = useAuth0();

    const goToNewSupplier = () => {
        navigate(PageRoutes.supplierNew)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const token = await getAccessTokenSilently();
                const response = await axios.get(ServicesRoutes.suppliers, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setSuppliers(response.data.result)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [getAccessTokenSilently])

    if(isLoading) return <Loading />

    if(suppliers === null) return <Alert severity="error">Ha ocurrido un error inesperado</Alert>

    return (
        <PageTemplate title="Proveedores">
            <Paper elevation={0} sx={{display: 'flex', p: 2, mb: 4, flexDirection: 'row'}}>
                <Button variant="contained" onClick={goToNewSupplier}>
                    Crear nuevo
                </Button>
            </Paper>
            {
                !suppliers?.length ? <NoContent/>
                :  
                <Stack spacing={2}>
                    {suppliers.map((supplier) => (
                        <SupplierItem
                            key={supplier.id}
                            id={supplier.id}
                            name={supplier.name}
                            cuit={supplier.cuit}
                        />
                ))}
                    </Stack>
            }
           
        </PageTemplate>
    )
}