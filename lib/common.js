exports.queryBuild = (query) => {
    const qPage = query.page ? `page=${query.page}` : '';
    const qSort = query.sort ? `&sort=${query.sort}` : '';
    const qDir = query.dir ? `&dir=${query.dir}` : '';
    const qCat = query.cat ? `&cat=${query.cat}` : '';
    const qPriceMin = query.price_min ? `&price_min=${query.price_min}` : '';
    const qPriceMax = query.price_max ? `&price_max=${query.price_max}` : '';

    return `?${qPage}${qSort}${qDir}${qCat}${qPriceMin}${qPriceMax}`;
};

exports.updateQueryStringParameter = (uri, key, value) => {
    const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
    const separator = uri.indexOf('?') !== -1 ? '&' : '?';
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + '=' + value + '$2');
    } else {
        return uri + separator + key + '=' + value;
    }
};
exports.activePath = (currentPath, path, options) => {
    const regexPath = pathToRegexp(path, options);
    return regexPath.exec(currentPath);
};