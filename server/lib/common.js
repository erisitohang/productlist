const ObjectId = require('mongodb').ObjectID;

exports.isMongoId = (id) => {
    return id.match(/^[0-9a-fA-F]{24}$/);
};

exports.getId = (id) => {
    if (id) {
        if (id.length !== 24) {
            return id;
        }
    }
    return ObjectId(id);
};

exports.filter = (req) => {
    const filter = {};
    const cat = req.param('cat') || null;
    const priceMin = req.param('price_min') || 0;
    const priceMax = req.param('price_max') || 0;
    if (cat) {
        filter['categories'] = { $in: [cat] };
    }
    if (priceMin >= 0 && priceMax > priceMin) {
        filter['price'] = { $gte: priceMin, $lte: priceMax };
    }

    return filter;
};

exports.sorter = (req) => {
    const sorter = {};
    const sort = req.param('sort') || 'created_at';
    const dir = req.param('dir') || 'desc';
    sorter[sort] = dir;

    return sorter;
};