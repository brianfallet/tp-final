import { sequelize } from "../database/connection.js";
import { Model, DataTypes } from "sequelize";

class Supplier extends Model {}

Supplier.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuit: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Supplier'
})

export default Supplier