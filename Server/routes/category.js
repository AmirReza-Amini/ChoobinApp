const category = require('../models/category.model')
const express = require('express');
const router = express.Router();
const { Map } = require('../util/utility')

router.get('/', async (req, res) => {
    console.log('GET');
    res.send(await category.find());
});
router.post('/', async (req, res) => {
    console.log(req.body);
    let cat = category();
    Map(req.body, cat);
    try {
        await cat.save();
        res.json(Object.assign(req.base, {
            data: cat
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