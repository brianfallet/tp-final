import Clients from '../model/client.model.js'

export const getClients = async (req, res) => {
    try {
        await Clients.sync()
        const clients = await Clients.findAll()
        res.status(200).json({
            ok: true,
            status: 200,
            result: clients
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const getClientById = async (req, res) => {
    try {
        const { id } = req.params
        const client = await Clients.findOne({
            where: { id }
        })
        res.status(200).json({
            ok: true,
            status: 200,
            result: client
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const createClient = async (req, res) => {
    try {
        const { name, cuit } = req.body
        await Clients.sync()
        await Clients.create({
            name,
            cuit
        })
        res.status(201).json({
            ok: true,
            status: 201,
            message: "Created client"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const deleteClient = async (req, res) => {
    try {
        const { id } = req.params
        await Clients.sync()
        await Clients.destroy({ where: { id }})
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Deleted client"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const updateClient = async (req, res) => {
    try {
        const { id } = req.params
        const { name, cuit } = req.body
        await Clients.sync()
        await Clients.update({
            name,
            cuit
        }, { where : { id }})
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Updated client"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const getClientsCount = async (req, res) => {
    try {
        const count = await Clients.count()
        res.status(200).json({
            ok: true,
            status: 200,
            result: count
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}