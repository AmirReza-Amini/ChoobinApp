const Category = require('../models/category.model')
const express = require('express');
const router = express.Router();
const { Map } = require('../util/utility')
const { Save } = require('../util/GenericMethods')
router.get('/', async (req, res) => {
    res.send(await Category.find());
});
router.post('/', async (req, res) => {
    console.log(req.body);
    let cat = Category();
    Map(req.body, cat);
    Save(cat, req, res)
})

module.exports = router;