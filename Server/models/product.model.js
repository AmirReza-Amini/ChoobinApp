const mongoose = require('mongoose');
const { storeSchema } = require('./store.model')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: Number },
    category: { type: String },
    resinAmmount: { type: Number },
    materials: [storeSchema]
});

const productModel = mongoose.model('product', productSchema);
module.exports = {
    productModel: productModel,
    productSchema: productSchema
};
