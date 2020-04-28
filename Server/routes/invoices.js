const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoice.model');
const { Map, GenerateNo, SendResponse } = require('../util/utility')
const { Save } = require('../util/GenericMethods')
const moment = require('moment')
moment.locale('fa-IR')
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
            .limit(1)
            .sort({ '_id': -1 }));
        console.log("lastNo", lastNo)

        invoice.orderNumber = GenerateNo(lastNo.length > 0
            ? lastNo[0].orderNumber
            : '');

        try {
            return Save(invoice, req, res)
        }
        catch (ex) {
            return SendResponse(req, res, ex.message, false);
        }
    })
    .put(async (req, res) => {
        console.log("moment(new Date())", moment(new Date()).format())

        let order = await Invoice.findById(req.body._id);
        console.log("req.body", req.body)
        if (order.status == 'sent')
            return SendResponse(req, res, { message: 'این سفارش بسته شده است' }, false)


        switch (req.body.status) {
            case 'pend':
                order.payment = {};
                break;
            case 'paid':
                order.payment = { date: moment(new Date()).format(), trackingCode: '0123' };
                break;
            case 'sent':
                if (order.status == 'paid') {
                    order.sendData = { date: moment(new Date()).format(), tackingCode: '', price: 10000 };
                }
                else
                    return SendResponse(req, res, { message: 'صورتحساب این سفارش پرداخت نشده است' }, false)
                break;
        }
        order.status = req.body.status;
        return Save(order, req, res)
    })

module.exports = router;