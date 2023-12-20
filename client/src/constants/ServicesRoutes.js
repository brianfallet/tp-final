const baseURL = import.meta.env.VITE_API_URL

export const ServicesRoutes = {
    products: baseURL + '/products',
    suppliers: baseURL + '/suppliers',
    measureUnits: baseURL + '/measureUnits',
    clients: baseURL + '/clients',
    productsCount: baseURL + '/products/count',
    suppliersCount: baseURL + '/suppliers/count',
    measureUnitsCount: baseURL + '/measureUnits/count',
    clientsCount: baseURL + '/clients/count'
}