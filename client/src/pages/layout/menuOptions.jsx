import { Home, Inventory, People, Groups } from '@mui/icons-material';
import { PageRoutes } from '../../constants/PageRoutes';

export const menuOptions = [
    { id: 'home', label: "Inicio", icon: <Home />, route: PageRoutes.home},
    { id: 'products', label: "Productos", icon: <Inventory />, route: PageRoutes.products},
    { id: 'suppliers', label: 'Proveedores', icon: <People/>, route: PageRoutes.suppliers},
    { id: 'clients', label: 'Clientes', icon: <Groups/>, route: PageRoutes.clients}
]