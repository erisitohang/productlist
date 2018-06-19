import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { CONST_SHOP } from '../constants';

@inject('productStore') @observer
class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      productStore: {
          product
      }
    } = this.props;
    return (
        <div className={'row'}>
            <aside className="col-5 border-right">
                <article className="gallery-wrap">
                    <div className="img-big-wrap">
                        <div><img src={product.image}/></div>
                    </div>
                </article>
            </aside>
            <aside className="col-7">
                <article className="card-body p-5">
                    <h3 className="title mb-3">{product.name}</h3>

                    <p className="price-detail-wrap">
                        <span className="price h3 text-warning">
                            <span className="currency">S $</span><span className="num">{product.price}</span>
                        </span>
                    </p>
                    <dl className="item-property">
                        <dt>Description</dt>
                        <dd dangerouslySetInnerHTML={{ __html: product.description }}></dd>
                    </dl>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-5">
                            <dl className="param param-inline">
                                <dt>Quantity:</dt>
                                <dd>
                                    <select className="form-control form-control-sm" style={{width: 70}}>
                                        <option> 1</option>
                                        <option> 2</option>
                                        <option> 3</option>
                                    </select>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <hr/>
                    <a href="#" className="btn btn-lg btn-primary text-uppercase"> {CONST_SHOP.BUY_NOW} </a>
                    <a href="#" className="btn btn-lg btn-outline-primary text-uppercase"> <i
                        className="fas fa-shopping-cart"> </i> {CONST_SHOP.ADD_TO_CART} </a>
                </article>
            </aside>
        </div>
    );
  }
};

export default ProductItem;