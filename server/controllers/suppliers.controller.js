import Suppliers from '../model/supplier.model.js'

export const getSuppliers = async (req, res) => {
    try {
        await Suppliers.sync()
        const suppliers = await Suppliers.findAll()
        res.status(200).json({
            ok: true,
            status: 200,
            result: suppliers
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const getSupplierById = async (req, res) => {
    try {
        const { id } = req.params
        const supplier = await Suppliers.findOne({
            where: { id }
        })
        res.status(200).json({
            ok: true,
            status: 200,
            result: supplier
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const createSupplier = async (req, res) => {
    try {
        const { name, cuit } = req.body
        await Suppliers.sync()
        await Suppliers.create({
            name,
            cuit
        })
        res.status(201).json({
            ok: true,
            status: 201,
            message: "Created supplier"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const deleteSupplier = async (req, res) => {
    try {
        const { id } = req.params
        await Suppliers.sync()
        await Suppliers.destroy({ where: { id }})
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Deleted supplier"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const updateSupplier = async (req, res) => {
    try {
        const { id } = req.params
        const { name, cuit } = req.body
        await Suppliers.sync()
        await Suppliers.update({
            name,
            cuit
        }, { where : { id }})
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Updated supplier"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const getSuppliersCount = async (req, res) => {
    try {
        const count = await Suppliers.count()
        res.status(200).json({
            ok: true,
            status: 200,
            result: count
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}