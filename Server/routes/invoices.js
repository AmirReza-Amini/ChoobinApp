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
        res.json(Object.assign(req.base, {
            result: false,
            data: ex.message
        }));
    }
});

router.route('/')
    .post(async (req, res) => {
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

module.exports = router;