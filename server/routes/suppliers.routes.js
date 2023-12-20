import { Router } from 'express'
import { getSuppliers, getSupplierById, createSupplier, updateSupplier, deleteSupplier, getSuppliersCount } from '../controllers/suppliers.controller.js'

const router = Router()

router.get('/', getSuppliers)
router.get('/count', getSuppliersCount)
router.post('/', createSupplier)
router.get('/:id', getSupplierById)
router.delete('/:id', deleteSupplier)
router.put('/:id', updateSupplier)

export default router