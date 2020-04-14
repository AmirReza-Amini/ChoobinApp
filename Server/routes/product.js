const category = require('../models/category.model');
const { productModel } = require('../models/product.model');
const express = require('express');
const router = express.Router();
const { Map } = require('../util/utility')

router.get('/', async (req, res) => {
    console.log('GET');
    res.send();
});
router.post('/', async (req, res) => {
    let cat = await category.findOne({ 'name': req.body.category })
    var regexp = new RegExp("^" + cat.codePrefix);
    let lastCode = (await productModel.findOne({ 'category': req.body.category, code: regexp })
        .sort({ '_id': -1 }));

    console.log("lastCode", lastCode)
    console.log("cat", cat.codePrefix)
    let prod = productModel();
    Map(req.body, prod);
    if (!prod.code)
        prod.code = lastCode ? parseInt(lastCode.code) + 1 : cat.codePrefix + '00';
    try {
        await prod.save();
        res.json(Object.assign(req.base, {
            data: prod
        }))
    }
    catch (ex) {
        res.json(Object.assign(req.base, {
            result: false,
            data: ex.message
        }))
    }
})

module.exports = router;