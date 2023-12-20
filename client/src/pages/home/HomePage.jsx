import { useAuth0 } from "@auth0/auth0-react";
import { PageTemplate } from "../layout/PageTemplate.jsx"
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { ServicesRoutes } from "../../constants/ServicesRoutes.js";
import { Stack } from "@mui/material";
import { HomeCountItem } from "./components/HomeCountItem.jsx";
import { Loading } from "../../components/Loading.jsx";

export const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const { getAccessTokenSilently } = useAuth0();
    const [counts, setCounts] = useState(null)

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const token = await getAccessTokenSilently();
                const productsCounts = await axios.get(ServicesRoutes.productsCount, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const clientsCount = await axios.get(ServicesRoutes.clientsCount, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const suppliersCount = await axios.get(ServicesRoutes.suppliersCount, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setCounts({
                    products: productsCounts.data.result,
                    clients: clientsCount.data.result,
                    suppliers: suppliersCount.data.result
                })
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [getAccessTokenSilently])

    if(isLoading) return <Loading />

    return (
       <PageTemplate title="Inicio">
        <Stack direction="row" gap={4}>
            <HomeCountItem label="Productos" count={counts.products} />
            <HomeCountItem label="Clientes" count={counts.clients} />
            <HomeCountItem label="Proveedores" count={counts.suppliers} />
        </Stack>
       </PageTemplate>
    )
}
