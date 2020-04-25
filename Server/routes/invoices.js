const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoice.model');
const { Map } = require('../util/utility')
router.get('/:id?', async (req, res) => {
    try {
        let invoiceId = req.params.id;
        let condition = invoiceId ? { _id: invoiceId } : {};
        let doc = (await Invoice.find(condition))
            // .map(m => {
            //     return {
            //         fullName: m.customer.fullName,
            //         orderNumber: m.orderNumber,
            //         createDate: m.createDate,
            //         status: m.status,
            //         totalPrice: m.totalPrice
            //     }
            // });
        return res.json(Object.assign(req.base, {
            data: doc
        }));
    }
    catch (ex) {
        return res.json(Object.assign(req.base, {
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