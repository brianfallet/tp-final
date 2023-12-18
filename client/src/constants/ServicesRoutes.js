const baseURL = import.meta.env.VITE_API_URL

export const ServicesRoutes = {
    products: baseURL + '/products',
    suppliers: baseURL + '/suppliers',
    measureUnits: baseURL + '/measureUnits'
}