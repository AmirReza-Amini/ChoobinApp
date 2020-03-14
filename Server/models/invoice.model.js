const mongoose = require('../bootstrap/mongodb');

// let productSchema = mongoose.Schema({
//     _id: String,
//     name: { type: String, require: true },
//     category: { type: String, require: true },
//     caption: { type: String, require: true },
//     url: { type: String, default: '' },
//     likeCount: { type: Number, default: 0 },
//     price: { type: Number, default: 0 },
//     isVisible: { type: Boolean, require: true, default: true },
// });

let itemsSchema = mongoose.Schema({
    // _id: String,
    // product: productSchema,
    code: { type: Number, require: true },
    fee: { type: Number, require: true },
    quantity: { type: Number, default: 1 }
});

let invoiceSchema = mongoose.Schema({
    fullName: { type: String, trim: true, require: true },
    phone: { type: String, trim: true, require: true },
    address: { type: String, trim: true, require: true },
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    postalCode: { type: String, trim: true },
    items: [itemsSchema],
    paid: { type: Boolean, default: false },
    createDate: { type: Date, require: true, default: Date.now() }
});

invoiceSchema.path('postalCode').validate(function (code) {
    return code && code.length === 10;
}, 'Postal code must be 10 characters');

let invoiceModel = mongoose.model('invoice', invoiceSchema);

module.exports = invoiceModel;