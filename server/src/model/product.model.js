import { sequelize } from "../database/connection.js";
import { Model, DataTypes } from "sequelize";

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    commercialName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    measureUnitId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    salePrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    buyPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    supplierId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Product',
})

export default Product