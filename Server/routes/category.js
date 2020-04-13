const category = require('../models/category.model')
const express = require('express');
const router = express.Router();
const { Map } = require('../util/utility')

router.post('path', (req, res) => {
    res.send('Hello');
    // let cat = category();
    // Map(req.body, cat);
    // try {
    //     await cat.save();
    //     res.json(Object.assign(req.base, {
    //         data: cat
    //     }))
    // }
    // catch (ex) {
    //     res.json(Object.assign(req.base, {
    //         result: false,
    //         data: ex.message
    //     }))
    // }
})

module.exports = router;