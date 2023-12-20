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
import { MeasureUnitItem } from "./components/MeasureUnitItem";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { grey } from "@mui/material/colors";

export const MeasureUnitsPage = () => {
    const navigate = useNavigate()
    const [measureUnits, setMeasureUnits] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { getAccessTokenSilently } = useAuth0();

    const goToNewMeasureUnit = () => {
        navigate(PageRoutes.measureUnitNew)
    }

    const goBack = () => {
        navigate(PageRoutes.products)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const token = await getAccessTokenSilently();
                const response = await axios.get(ServicesRoutes.measureUnits, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setMeasureUnits(response.data.result)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [getAccessTokenSilently])

    if(isLoading) return <Loading />

    if(measureUnits === null) return <Alert severity="error">Ha ocurrido un error inesperado</Alert>

    return (
        <PageTemplate title="Unidades de medida">
            <Paper elevation={0} sx={{display: 'flex', p: 2, mb: 4, flexDirection: 'row'}}>
                <Stack direction="row" gap={4}>
                    <Button variant="outlined" onClick={goBack} startIcon={<ChevronLeftIcon />}>
                        Atrás
                    </Button>
                    <Button variant="contained" onClick={goToNewMeasureUnit}>
                        Crear nuevo
                    </Button>
                </Stack>
            </Paper>
            {
                !measureUnits?.length ? <NoContent/>
                :  
                <Stack spacing={2}>
                    {measureUnits.map((measureUnit) => (
                        <MeasureUnitItem
                            key={measureUnit.id}
                            id={measureUnit.id}
                            unitName={measureUnit.unitName}
                            unitAbbreviation={measureUnit.unitAbbreviation}
                        />
                ))}
                    </Stack>
            }
           
        </PageTemplate>
    )
}