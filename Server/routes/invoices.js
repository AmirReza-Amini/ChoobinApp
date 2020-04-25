const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoice.model');
const { Map, GenerateNo, SendResponse } = require('../util/utility')
const { GetLast, GetAll } = require('../util/GenericMethods')
router.get('/:id?', async (req, res) => {
    try {
        let invoiceId = req.params.id;
        let condition = invoiceId ? { _id: invoiceId } : {};
        let doc = (await Invoice.find(condition))
        return SendResponse(req, res, doc);
    }
    catch (ex) {
        return SendResponse(req, res, ex.message, false);
    }
});

router.route('/')
    .post(async (req, res) => {
        let invoice = Invoice();
        Map(req.body, invoice)

        let lastNo = (await Invoice
            .find()
            .select({ 'orderNumber': 1 })
            .sort({ '_id': -1 }));
        console.log("lastNo", lastNo)

        invoice.orderNumber = GenerateNo(lastNo.length > 0
            ? lastNo[0].orderNumber
            : '');

        try {
            await invoice.save();
            return SendResponse(req, res, invoice);
        }
        catch (ex) {
            return SendResponse(req, res, ex.message, false);
        }
    });

module.exports = router;