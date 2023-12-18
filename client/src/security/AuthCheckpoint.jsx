import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { PageRoutes } from '../constants/PageRoutes';
import { Loading } from '../components/Loading';

export const AuthCheckPoint = () => {
    const location = useLocation();
    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) return <Loading />

    if (!isAuthenticated) {
        return (
            <Navigate
                to={PageRoutes.login}
                state={{
                    from: location,
                }}
            />
        );
    }

    return <Outlet />;
};
