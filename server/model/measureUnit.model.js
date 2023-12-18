import { sequelize } from "../database/connection.js";
import { Model, DataTypes } from "sequelize";

class MeasureUnit extends Model {}

MeasureUnit.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    unitName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unitAbbreviation: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'MeasureUnit'
})

export default MeasureUnit