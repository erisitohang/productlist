const express = require('express');
const router = express.Router();
router.use('/products', require('./api/v1/products'));
module.exports = router;