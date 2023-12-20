import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';
import { ServicesRoutes } from "../../constants/ServicesRoutes";
import axios from "axios";
import { Loading } from "../../components/Loading";
import { PageRoutes } from "../../constants/PageRoutes";
import { Alert } from "@mui/material";
import { ClientForm } from "./components/ClientForm";

export const ClientDetailPage = () => {

    const { id } = useParams()
    const [client, setClient] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const { getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate()

    const handleEdit = () => {
        setDisabled(false)
    }

    const handleCancelEdit = () => {
        setDisabled(true)
    }

    const handleDelete = async () => {
        try {
            setIsLoading(true)
            const token = await getAccessTokenSilently();
            await axios.delete(`${ServicesRoutes.clients}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            navigate(PageRoutes.clients)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true)
            const token = await getAccessTokenSilently();
            const response = await axios.get(`${ServicesRoutes.clients}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setClient(response.data.result)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [getAccessTokenSilently, id])

    const handleSubmit = async (data) => {
        try {
            setIsLoading(true)
            const token = await getAccessTokenSilently();
            await axios.put(`${ServicesRoutes.clients}/${id}`, {
                ...data
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            await fetchData()
            setDisabled(true)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [fetchData])

    if(isLoading) return <Loading />

    if(!client) return <Alert severity="error">Ha ocurrido un error inesperado</Alert>
    
    return (
        <ClientForm 
            {...client} 
            disabled={disabled} 
            onEdit={handleEdit} 
            onCancelEdit={handleCancelEdit}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
        />
    )
}