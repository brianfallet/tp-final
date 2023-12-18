import { Home, Inventory } from '@mui/icons-material';
import { PageRoutes } from '../../constants/PageRoutes';

export const menuOptions = [
    { id: 'home', label: "Inicio", icon: <Home />, route: PageRoutes.home},
    { id: 'products', label: "Productos", icon: <Inventory />, route: PageRoutes.products}
]