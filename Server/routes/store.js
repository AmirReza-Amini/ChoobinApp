const { storeModel } = require('../models/store.model')
const { Map } = require('../util/utility')
const express = require('express');
const router = express.Router();
const { Save, GetAll } = require('../util/GenericMethods')

router.route('/')
    .get(async (req, res) => {
        GetAll(storeModel, req, res)
    })
    .post(async (req, res) => {
        let good = storeModel();
        Map(req.body, good)
        good.byList = [
            {
                "ammount": good.ammount,
                "price": good.price
            }
        ]
        Save(good, req, res)
    })

router.post('/by', async (req, res) => {
    let id = req.body.id;
    let good = await storeModel.findOne({ _id: id });
    good.price = req.body.price;
    good.ammount = good.ammount + req.body.ammount;
    good.byList.push({
        ammount: req.body.ammount,
        price: req.body.price
    })
    Save(good, req, res)
})

module.exports = router;