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
import { ClientItem } from "./components/ClientItem";

export const ClientsPage = () => {
    const navigate = useNavigate()
    const [clients, setClients] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { getAccessTokenSilently } = useAuth0();

    const goToNewClient = () => {
        navigate(PageRoutes.clientNew)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const token = await getAccessTokenSilently();
                const response = await axios.get(ServicesRoutes.clients, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setClients(response.data.result)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [getAccessTokenSilently])

    if(isLoading) return <Loading />

    if(clients === null) return <Alert severity="error">Ha ocurrido un error inesperado</Alert>

    return (
        <PageTemplate title="Proveedores">
            <Paper elevation={0} sx={{display: 'flex', p: 2, mb: 4, flexDirection: 'row'}}>
                <Button variant="contained" onClick={goToNewClient}>
                    Crear nuevo
                </Button>
            </Paper>
            {
                !clients?.length ? <NoContent/>
                :  
                <Stack spacing={2}>
                    {clients.map((client) => (
                        <ClientItem
                            key={client.id}
                            id={client.id}
                            name={client.name}
                            cuit={client.cuit}
                        />
                ))}
                    </Stack>
            }
           
        </PageTemplate>
    )
}