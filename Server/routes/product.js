const Category = require('../models/category.model');
const { productModel } = require('../models/product.model');
const { storeModel } = require('../models/store.model')
const express = require('express');
const router = express.Router();
const { Map } = require('../util/utility')
const { Save, GetAll } = require('../util/GenericMethods')

router.get('/', async (req, res) => {
    let resin = await storeModel.findOne({ 'code': 'RESIN_WATERY' })
    let products = (await productModel.find())
        .map(p => {
            return {
                name: p.name,
                code: p.code,
                category: p.category,
                price: (p.resinAmmount * resin.price) * p.hardness
            }
        })
    console.log("resin", resin)
    res.send(products)
});
router.post('/', async (req, res) => {
    let cat = await Category.findOne({ 'name': req.body.category })
    var regexp = new RegExp("^" + cat.codePrefix);
    let lastCode = (await productModel
        .findOne({ 'category': req.body.category, code: regexp })
        .sort({ '_id': -1 }));

    let prod = productModel();
    Map(req.body, prod);
    if (!prod.code)
        prod.code = lastCode ? parseInt(lastCode.code) + 1 : cat.codePrefix + '00';
    Save(prod, req, res)
})

module.exports = router;