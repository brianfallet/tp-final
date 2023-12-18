import Product from "./product.model.js";
import MeasureUnit from "./measureUnit.model.js";
import Supplier from "./supplier.model.js";


MeasureUnit.hasMany(Product, {
    foreignKey: 'measureUnitId',
});

Product.belongsTo(MeasureUnit, {
    foreignKey: 'measureUnitId',
});

Supplier.hasMany(Product, {
    foreignKey: 'supplierId',
});

Product.belongsTo(Supplier, {
    foreignKey: 'supplierId',
});