import Products from '../model/product.model.js'

export const getProducts = async (req, res) => {
    try {
        await Products.sync()
        const products = await Products.findAll()
        res.status(200).json({
            ok: true,
            status: 200,
            result: products
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Products.findOne({
            where: { id }
        })
        res.status(200).json({
            ok: true,
            status: 200,
            result: product
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, commercialName, measureUnitId, salePrice, buyPrice, supplierId, imageUrl } = req.body
        await Products.sync()
        await Products.create({
            name,
            commercialName,
            measureUnitId,
            salePrice,
            buyPrice,
            supplierId,
            imageUrl
        })
        res.status(201).json({
            ok: true,
            status: 201,
            message: "Created product"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        await Products.sync()
        await Products.destroy({ where: { id }})
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Deleted product"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const { name, commercialName, measureUnitId, salePrice, buyPrice, supplierId, imageUrl } = req.body
        await Products.sync()
        await Products.update({
            name,
            commercialName,
            measureUnitId,
            salePrice,
            buyPrice,
            supplierId,
            imageUrl
        }, { where : { id }})
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Updated product"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}