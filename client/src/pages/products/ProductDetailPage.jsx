import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';
import { ServicesRoutes } from "../../constants/ServicesRoutes";
import axios from "axios";
import { Loading } from "../../components/Loading";
import { ProductForm } from "./components/ProductForm";
import { PageRoutes } from "../../constants/PageRoutes";
import { Alert } from "@mui/material";

export const ProductDetailPage = () => {

    const { id } = useParams()
    const [product, setProduct] = useState(null);
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
            await axios.delete(`${ServicesRoutes.products}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            navigate(PageRoutes.products)
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
            const response = await axios.get(`${ServicesRoutes.products}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setProduct(response.data.result)
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
            await axios.put(`${ServicesRoutes.products}/${id}`, {
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

    if(!product) return <Alert severity="error">Ha ocurrido un error inesperado</Alert>
    
    return (
        <ProductForm 
            {...product} 
            disabled={disabled} 
            onEdit={handleEdit} 
            onCancelEdit={handleCancelEdit}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
        />
    )
}