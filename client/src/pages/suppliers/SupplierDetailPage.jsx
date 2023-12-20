import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';
import { ServicesRoutes } from "../../constants/ServicesRoutes";
import axios from "axios";
import { Loading } from "../../components/Loading";
import { PageRoutes } from "../../constants/PageRoutes";
import { Alert } from "@mui/material";
import { SupplierForm } from "./components/SupplierForm";

export const SupplierDetailPage = () => {

    const { id } = useParams()
    const [supplier, setSupplier] = useState(null);
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
            await axios.delete(`${ServicesRoutes.suppliers}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            navigate(PageRoutes.suppliers)
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
            const response = await axios.get(`${ServicesRoutes.suppliers}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setSupplier(response.data.result)
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
            await axios.put(`${ServicesRoutes.suppliers}/${id}`, {
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

    if(!supplier) return <Alert severity="error">Ha ocurrido un error inesperado</Alert>
    
    return (
        <SupplierForm 
            {...supplier} 
            disabled={disabled} 
            onEdit={handleEdit} 
            onCancelEdit={handleCancelEdit}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
        />
    )
}