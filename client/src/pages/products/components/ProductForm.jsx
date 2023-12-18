import { useEffect, useState } from "react";
import { Alert, Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import { Loading } from "../../../components/Loading";
import { ServicesRoutes } from "../../../constants/ServicesRoutes";


export const ProductForm = ({ id, name, commercialName, salePrice, buyPrice, supplierId, measureUnitId, imageUrl, disabled, onEdit, onCancelEdit, onSubmit, onDelete }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [suppliers, setSuppliers] = useState(null)
    const [measureUnits, setMeasureUnits] = useState(null)
    const { getAccessTokenSilently } = useAuth0();

    const {
        register,
        handleSubmit,
        getValues,
  } = useForm({
    defaultValues: id ? {
        name, commercialName, salePrice, buyPrice, supplierId, measureUnitId, imageUrl
    } : {
        name: "",
        commercialName: "",
        salePrice: 0,
        buyPrice: 0,
        supplierId: "",
        measureUnitId: "",
        imageUrl: ""
    }
  })

  useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const token = await getAccessTokenSilently();
                const responseSuppliers = await axios.get(ServicesRoutes.suppliers, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const responseMeasureUnits = await axios.get(ServicesRoutes.measureUnits, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setSuppliers(responseSuppliers.data.result)
                setMeasureUnits(responseMeasureUnits.data.result)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [getAccessTokenSilently])

    const onFormSubmit = handleSubmit(onSubmit)

    if(isLoading) return <Loading />

    if(!suppliers || !measureUnits) return <Alert severity="error">Ha ocurrido un error inesperado</Alert>

    return (
        <form onSubmit={onFormSubmit}>
            <Stack spacing={4}>
                <TextField 
                    label="Nombre" 
                    {...register("name", {
                        required: true
                    })} 
                    disabled={disabled} 
                />
                <TextField 
                    label="Nombre comercial" 
                    {...register("commercialName", {
                        required: true
                    })} 
                    disabled={disabled} 
                />
                <TextField 
                    label="Precio de venta"  
                    {...register("salePrice", {
                        required: true
                    })} 
                    disabled={disabled} 
                    type="number"
                    inputProps={{
                        step: 0.001
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <TextField 
                    label="Precio de compra"  
                    {...register("buyPrice", {
                        required: true
                    })} 
                    disabled={disabled} 
                    type="number"
                    inputProps={{
                        step: 0.001
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    
                />
                <FormControl>
                    <InputLabel id="select-supplier">Proveedor</InputLabel>
                    <Select 
                        label="Proveedor"
                        labelId="select-supplier"
                        defaultValue={getValues().supplierId}
                        {...register("supplierId", {
                        required: true
                    })} 
                        disabled={disabled}
                    >
                        {suppliers.map(supplier => (
                            <MenuItem key={supplier.id} value={supplier.id}>{supplier.name}</MenuItem>
                        )) }
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="select-measureUnit">Unidad de medida</InputLabel>
                    <Select 
                        label="Unidad de medida"
                        labelId="select-measureUnit"
                        defaultValue={getValues().measureUnitId}
                        {...register("measureUnitId", {
                        required: true
                    })} 
                        disabled={disabled}
                    >
                        {measureUnits.map(measureUnit => (
                            <MenuItem key={measureUnit.id} value={measureUnit.id}>{measureUnit.unitName}</MenuItem>
                        )) }
                    </Select>
                </FormControl>
                <TextField 
                    label="Url de imagen" 
                    {...register("imageUrl", {
                        required: true
                    })} 
                    disabled={disabled} 
                />
                {
                    id && disabled ? 
                    <Button variant="contained" onClick={onEdit}>
                        Editar
                    </Button> 
                    : null
                }
                { 
                    !disabled ?
                    <Button type="submit" variant="contained">
                        {id ? "Modificar" : "Crear"}
                    </Button>
                    : null
                } 
                {
                    id && !disabled ? 
                    <Button variant="contained" color="error" onClick={onCancelEdit}>
                        Cancelar
                    </Button> 
                    : null
                }
                {
                    id && disabled ? 
                    <Button variant="contained" color="error" onClick={onDelete}>
                        Eliminar
                    </Button>
                    : null
                }
            </Stack>
        </form>
    )
}

ProductForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    commercialName: PropTypes.string,
    salePrice: PropTypes.number,
    buyPrice: PropTypes.number,
    supplierId: PropTypes.string,
    measureUnitId: PropTypes.string,
    imageUrl: PropTypes.string,
    disabled: PropTypes.bool,
    onEdit: PropTypes.func,
    onCancelEdit: PropTypes.func,
    onSubmit: PropTypes.func,
    onDelete: PropTypes.func
}