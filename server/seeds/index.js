const Product = require('../models/product');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');


let numberOfMigration = 1;
let migrated = 0;

let products = require('./data/product.json');
let done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].created_at = new Date();
    products[i].updated_at = new Date();
    new Product(products[i]).save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}
function exit() {
    migrated++;
    if  (migrated === numberOfMigration) {
        mongoose.disconnect();
    }
}
