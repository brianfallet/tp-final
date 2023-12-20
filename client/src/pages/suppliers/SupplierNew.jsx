import { useState } from 'react'
import axios from 'axios';
import { ServicesRoutes } from '../../constants/ServicesRoutes';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '../../constants/PageRoutes';
import { Loading } from '../../components/Loading';
import { SupplierForm } from './components/SupplierForm';

export const SupplierNewPage = () => {
    const [disabled, setDisabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate()

    const handleEdit = () => {
        setDisabled(false)
    }

    const onCancelEdit = () => {
        setDisabled(true)
    }

    const onSubmit = async (data) => {
        try {
            setIsLoading(true)
            const token = await getAccessTokenSilently();
            await axios.post(ServicesRoutes.suppliers, {
                ...data
            }, {
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

    if(isLoading) return <Loading />

    return (
        <SupplierForm 
            disabled={disabled} 
            onEdit={handleEdit} 
            onCancelEdit={onCancelEdit}
            onSubmit={onSubmit}
        />
    )
}