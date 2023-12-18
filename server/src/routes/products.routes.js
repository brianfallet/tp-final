import { Router } from 'express'
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js'

const router = Router()

router.get('/', getProducts)
router.post('/', createProduct)
router.get('/:id', getProductById)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)

export default router