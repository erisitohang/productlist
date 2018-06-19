import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ListItemProduct } from '../components';

@inject('productStore') @observer
class Products extends Component {

    render() {
        const {
            productStore: {
                products
            },
        } = this.props;

        return (

            <div className="row">
                {products.map((product, idx) => (
                    <ListItemProduct {...product} key={product._id} index={idx}/>
                ))}
            </div>

        );
    }
}

export default Products;