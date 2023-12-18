import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/login/LoginPage.jsx'
import { ProductsPage } from './pages/products/ProductsPage.jsx'
import { PageRoutes } from './constants/PageRoutes.js'
import { ErrorPage } from './pages/errorPages/ErrorPage.jsx'
import { LoginCheckpoint } from './security/LoginCheckpoint.jsx'
import { AuthCheckPoint } from './security/AuthCheckpoint.jsx'
import { HomePage } from './pages/home/HomePage.jsx'
import { ProductDetailPage } from './pages/products/ProductDetailPage.jsx'
import { BaseLayout } from './pages/layout/BaseLayout.jsx'
import { LoginPageLayout } from './pages/login/LoginPageLayout.jsx'
import { ProductNewPage } from './pages/products/ProductNew.jsx'

const router = createBrowserRouter([
    {
        path: PageRoutes.login,
        Component: LoginCheckpoint,
        ErrorBoundary: ErrorPage,
        children: [
            {
                path: PageRoutes.login,
                Component: LoginPageLayout,
                ErrorBoundary: ErrorPage,
                children: [
                    {
                        path: '',
                        Component: LoginPage,
                        ErrorBoundary: ErrorPage,
                    }
                ]
            }
        ]
    },
    {
        path: PageRoutes.root,
        Component: AuthCheckPoint,
        ErrorBoundary: ErrorPage,
        children: [
            {
                path: PageRoutes.root,
                Component: BaseLayout,
                ErrorBoundary: ErrorPage,
                children: [
                    {
                        path: PageRoutes.home,
                        Component: HomePage,
                        ErrorBoundary: ErrorPage,
                    },
                    {
                        path: PageRoutes.products,
                        Component: ProductsPage,
                        ErrorBoundary: ErrorPage,
                    },
                    {
                        path: PageRoutes.productDetail,
                        Component: ProductDetailPage,
                        ErrorBoundary: ErrorPage,
                    },
                    {
                        path: PageRoutes.productNew,
                        Component: ProductNewPage,
                        ErrorBoundary: ErrorPage,
                    }
                ]
            }
        ]
    }
])

export const Router = () => {
    return (
        <RouterProvider router={router}/>
    )
}