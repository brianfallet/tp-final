import express from 'express'
import config from './config.js'
import morgan from 'morgan'
import cors from 'cors'
import { auth } from 'express-oauth2-jwt-bearer'

import productsRoutes from './routes/products.routes.js'
import measureUnitsRoutes from './routes/measureUnits.routes.js'
import suppliersRoutes from './routes/suppliers.routes.js'


const app = express()

const jwtCheck = auth({
  audience: 'https://www.tp-final-api.com',
  issuerBaseURL: 'https://dev-rhd4gzbj3ucl53la.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});


//settings
app.use(cors())
app.set('port', config.port || 3000)
app.use(express.json());
//app.use(jwtCheck);

app.use(morgan("dev"))

app.use('/api/products', productsRoutes)
app.use("/api/measureUnits", measureUnitsRoutes)
app.use('/api/suppliers', suppliersRoutes)

export default app