const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Promise = require('bluebird');
Promise.promisifyAll(mongoose);

const schema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    categories: { type: Array, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: false },
    qty: { type: Number, required: true },
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model('Product', schema);

