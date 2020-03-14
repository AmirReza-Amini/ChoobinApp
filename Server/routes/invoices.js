const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoice.model');
const { Map } = require('../util/utility')
router.get('/:id?', async (req, res) => {

    try {
        let invoiceId = req.params.id;
        let condition = invoiceId ? { _id: invoiceId } : {};
        let doc = await Invoice.findOne(condition);
        return res.json(Object.assign(req.base, {
            data: doc
        }));
    }
    catch (ex) {
        console.log("ex", ex)

        res.json(Object.assign(req.base, {
            result: false,
            data: ex.message
        }));
    }
});

router.post('/', async (req, res, next) => {
    let invoice = Invoice();
    Map(req.body, invoice)
    try {
        await invoice.save();
        res.json(Object.assign(req.base, {
            data: invoice
        }))
    }
    catch (ex) {
        res.json(Object.assign(req.base, {
            result: false,
            data: ex.message
        }))
    }
});

router.put('/', async (req, res) => {
    let doc = await invoice.findOne({ _id: req.body._cardId });
    if (doc) {
        let item = doc.items.id(req.body._product._id);

        if (!item) {
            doc.items.push({
                _id: req.body._product._id,
                product: req.body._product,
                quantity: 1
            });

            try {
                doc.save();
                res.json(Object.assign(req.base, {
                    data: doc
                }))
            }
            catch (ex) {
                res.json(Object.assign(req.base, {
                    result: false
                }))
            }
        } else {

            let counter = req.body._flag === 'a' ? 1 : -1;
            try {
                let item = doc.items.id(req.body._product._id);
                if (item.quantity == 1 && counter == -1)
                    doc.items.pull(req.body._product._id)
                else
                    item.quantity += counter;

                await doc.save();
                res.json(Object.assign(req.base, {
                    data: doc
                }))
            }
            catch (ex) {
                res.json(Object.assign(req.base, {
                    result: false,
                    data: ex.message
                }))

            }
        }
    }
    else
        res.json(Object.assign(req.base, {
            result: false
        }));

});

module.exports = router;