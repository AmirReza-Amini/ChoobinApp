const mongoose = require('../bootstrap/mongodb');
const { customerSchema } = require('./customer.model');
const { productSchema } = require('./product.model');

let itemsSchema = mongoose.Schema({
    product: productSchema,
    price: { type: Number, require: true },
    discount: { type: Number, default: 0 },
    qty: { type: Number, default: 1 },
    accessories: { type: [String] }
});

let invoiceSchema = mongoose.Schema({
    items: [itemsSchema],
    customer: customerSchema,
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    payable: {
        type: Number, default: function () {
            return this.price - this.discount
        }
    },
    status: { type: String, default: 'pend', enum: ['pend', 'paid', 'sent'] },
    sendData: { type: {} }, //Date,TrackingCode,Price
    createDate: { type: Date, require: true, default: Date.now() },
    creator: { type: String, default: 'admin' }
});



let invoiceModel = mongoose.model('invoice', invoiceSchema);

module.exports = invoiceModel;