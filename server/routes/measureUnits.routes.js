import { Router } from 'express'
import { getMeasureUnits, getMeasureUnitById, createMeasureUnit, updateMeasureUnit, deleteMeasureUnit, getMeasureUnitsCount } from '../controllers/measureUnits.controller.js'

const router = Router()

router.get('/', getMeasureUnits)
router.get('/count', getMeasureUnitsCount)
router.post('/', createMeasureUnit)
router.get('/:id', getMeasureUnitById)
router.delete('/:id', deleteMeasureUnit)
router.put('/:id', updateMeasureUnit)

export default router