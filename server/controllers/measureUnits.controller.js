import MeasureUnit from "../model/measureUnit.model.js"

export const getMeasureUnits = async (req, res) => {
    await MeasureUnit.sync()
    const measureUnits = await MeasureUnit.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        result: measureUnits
    })
}

export const getMeasureUnitById = async (req, res) => {
    const { id } = req.params
    const measureUnit = await MeasureUnit.findOne({
        where: { id }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        result: measureUnit
    })
}

export const createMeasureUnit = async (req, res) => {
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
}