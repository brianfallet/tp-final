import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import PropTypes from 'prop-types';

export const ClientForm = ({ id, name, cuit, onSubmit, disabled, onEdit, onCancelEdit, onDelete }) => {

    const {
        register,
        handleSubmit,
  } = useForm({
    defaultValues: id ? {
        name, cuit
    } : {
        name: "",
        cuit: 0
    }
  })

  const onFormSubmit = handleSubmit(onSubmit)

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
                    label="CUIT" 
                    {...register("cuit", {
                        required: true
                    })}
                    type="number"
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

ClientForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    cuit: PropTypes.number,
    disabled: PropTypes.bool,
    onEdit: PropTypes.func,
    onCancelEdit: PropTypes.func,
    onSubmit: PropTypes.func,
    onDelete: PropTypes.func
}