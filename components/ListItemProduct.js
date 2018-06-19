import React from 'react';
import Link from 'next/link';
import { CONST_SHOP, CONST_PRICE, CONST_ROUTE } from '../constants';

const SingleProduct = ({ id, slug, name, image, price }) => (
    <div className="col-md-4">
        <div className="card">
            <img className="card-img-top img-responsive" src={image} alt={name}/>
            <div className="card-body">
                <Link prefetch as={`${CONST_ROUTE.PRODUCT_PATH}/${slug}`}
                      href={`${CONST_ROUTE.PRODUCT_PATH}?${CONST_ROUTE.SLUG}=${slug}`}>
                    <a>
                        <p className="card-text">{name}</p>
                    </a>
                </Link>
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-left">
                        {new Intl.NumberFormat(CONST_SHOP.LANGUAGE, {
                            style: CONST_PRICE.STYLE,
                            currency: CONST_PRICE.CURRENCY
                        }).format(price)}
                    </small>
                    <small className="text-center">
                        <i className="fa fa-heart-o" aria-hidden="true"> </i>
                    </small>
                </div>
            </div>
        </div>
    </div>
);

export default SingleProduct;