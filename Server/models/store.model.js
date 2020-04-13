const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    name: { type: String, required: true },
    unit: { type: String },
    ammount: { type: Number },
    orderPoint: { type: Number },
    byList: {
        type: [
            mongoose.Schema({
                date: { type: Date, default: Date.now() },
                ammount: { type: Number },
                price: { type: Number }
            })
        ]
    },
    exist: { type: Boolean, default: true }
});

const storeModel = mongoose.model('store', storeSchema);
module.exports = {
    storeModel: storeModel,
    storeSchema: storeSchema
};
