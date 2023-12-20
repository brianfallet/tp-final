import MeasureUnits from "../model/measureUnit.model.js"

export const getMeasureUnits = async (req, res) => {
    try {
        await MeasureUnits.sync()
        const measureUnits = await MeasureUnits.findAll()
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
        const measureUnit = await MeasureUnits.findOne({
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
    
        await MeasureUnits.sync()
        await MeasureUnits.create({
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

export const deleteMeasureUnit = async (req, res) => {
    try {
        const { id } = req.params
        await MeasureUnits.sync()
        await MeasureUnits.destroy({ where: { id }})
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Deleted measure unit"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const updateMeasureUnit = async (req, res) => {
    try {
        const { id } = req.params
        const { unitName, unitAbbreviation } = req.body
        await MeasureUnits.sync()
        await MeasureUnits.update({
            unitName, 
            unitAbbreviation
        }, { where : { id }})
        res.status(200).json({
            ok: true,
            status: 200,
            message: "Updated measure unit"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const getMeasureUnitsCount = async (req, res) => {
    try {
        const count = await MeasureUnits.count()
        res.status(200).json({
            ok: true,
            status: 200,
            result: count
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}