import Suppliers from '../model/supplier.model.js'

export const getSuppliers = async (req, res) => {
    await Suppliers.sync()
    const suppliers = await Suppliers.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        result: suppliers
    })
}

export const getSupplierById = async (req, res) => {
    const { id } = req.params
    const supplier = await Suppliers.findOne({
        where: { id }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        result: supplier
    })
}

export const createSupplier = async (req, res) => {
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
}