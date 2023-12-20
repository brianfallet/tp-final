import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import PropTypes from 'prop-types';

export const MeasureUnitForm = ({ id, unitName, unitAbbreviation, onSubmit, disabled, onEdit, onCancelEdit, onDelete }) => {

    const {
        register,
        handleSubmit,
  } = useForm({
    defaultValues: id ? {
        unitName, unitAbbreviation
    } : {
        unitName: "",
        unitAbbreviation: ""
    }
  })

  const onFormSubmit = handleSubmit(onSubmit)

  return (
        <form onSubmit={onFormSubmit}>
            <Stack spacing={4}>
                <TextField 
                    label="Nombre" 
                    {...register("unitName", {
                        required: true
                    })} 
                    disabled={disabled} 
                />
                <TextField 
                    label="Abreviación" 
                    {...register("unitAbbreviation", {
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

MeasureUnitForm.propTypes = {
    id: PropTypes.string,
    unitName: PropTypes.string,
    unitAbbreviation: PropTypes.string,
    disabled: PropTypes.bool,
    onEdit: PropTypes.func,
    onCancelEdit: PropTypes.func,
    onSubmit: PropTypes.func,
    onDelete: PropTypes.func
}