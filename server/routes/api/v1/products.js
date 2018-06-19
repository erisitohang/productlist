const express = require('express');
const router = express.Router();
const Product = require('../../../models/Product');
const common = require('../../../lib/common');
const constPager = require('../../../constants/pager');

router.get('/', function (req, res, next) {
    const perPage = constPager.PER_PAGE;
    const reqPage = parseInt(req.param('page'));
    const page = reqPage > constPager.DEFAULT_PAGE ? reqPage : constPager.DEFAULT_PAGE;
    const filter = common.filter(req);
    const sorter = common.sorter(req);

    Product.findAsync(filter, {}, {
        skip: perPage * (page - 1),
        limit: perPage,
        sort: sorter
    })
        .then(function (allProduct) {
            Product.count(filter).exec(function (err, count) {
                res
                    .status(200)
                    .json({
                        products: allProduct,
                        paginate: {
                            page: page,
                            pages: Math.ceil(count / perPage)
                        },
                    });
            });

        })
        .catch(next)
        .error(console.error);
});
router.get('/:id', function (req, res, next) {
    const query = { $or: [{ slug: req.params.id }] };

    if (common.isMongoId(req.params.id)) {
        query.$or.push({ _id: common.getId(req.params.id) });
    }

    Product.findOneAsync(query)
        .then(function (product) {
            res
                .status(200)
                .json(product);
        })
        .catch(next)
        .error(console.error);
});

module.exports = router;