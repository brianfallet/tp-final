import { Router } from 'express'
import { getMeasureUnits, getMeasureUnitById, createMeasureUnit } from '../controllers/measureUnits.controller.js'

const router = Router()

router.get('/', getMeasureUnits)
router.post('/', createMeasureUnit)
router.get('/:id', getMeasureUnitById)
router.delete('/', getMeasureUnits)
router.put('/', getMeasureUnits)

export default router