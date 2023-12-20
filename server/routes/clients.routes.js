import { Router } from 'express'
import { getClients, getClientById, createClient, updateClient, deleteClient, getClientsCount } from '../controllers/clients.controller.js'

const router = Router()

router.get('/', getClients)
router.get('/count', getClientsCount)
router.post('/', createClient)
router.get('/:id', getClientById)
router.delete('/:id', deleteClient)
router.put('/:id', updateClient)

export default router