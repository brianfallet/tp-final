import { Router } from 'express'
import { getSuppliers, getSupplierById, createSupplier } from '../controllers/suppliers.controller.js'

const router = Router()

router.get('/', getSuppliers)
router.post('/', createSupplier)
router.get('/:id', getSupplierById)
router.delete('/', getSuppliers)
router.put('/', getSuppliers)

export default router