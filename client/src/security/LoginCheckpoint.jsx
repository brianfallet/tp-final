import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';
import { PageRoutes } from '../constants/PageRoutes';
import { Loading } from '../components/Loading';

export const LoginCheckpoint = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) return <Loading />

    if (isAuthenticated) {
        console.log("IS AUTHENTICATED, REDIRECTING TO HOME")
        return <Navigate to={PageRoutes.home} />;
    } else {
        console.log("IS NOT AUTHENTICATED")
    }

    return <Outlet />;
};
