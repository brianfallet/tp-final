import MeasureUnit from "../model/measureUnit.model.js"

export const getMeasureUnits = async (req, res) => {
    try {
        await MeasureUnit.sync()
        const measureUnits = await MeasureUnit.findAll()
        res.status(200).json({
            ok: true,
            status: 200,
            result: measureUnits
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const getMeasureUnitById = async (req, res) => {
    try {
        const { id } = req.params
        const measureUnit = await MeasureUnit.findOne({
            where: { id }
        })
        res.status(200).json({
            ok: true,
            status: 200,
            result: measureUnit
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const createMeasureUnit = async (req, res) => {
    try {
        const { unitName, unitAbbreviation } = req.body
    
        if (!unitName || !unitAbbreviation) {
            return res.status(400).json({ message: 'Bad request' })
        }
    
        await MeasureUnit.sync()
        await MeasureUnit.create({
            unitName, 
            unitAbbreviation
        })
        res.status(201).json({
            ok: true,
            status: 201,
            message: "Created measure unit"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}