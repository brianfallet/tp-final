import { Router } from 'express'
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductsCount } from '../controllers/products.controller.js'

const router = Router()

router.get('/', getProducts)
router.get('/count', getProductsCount)
router.post('/', createProduct)
router.get('/:id', getProductById)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)

export default router