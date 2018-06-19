import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { initProductStore } from '../store/product';
import { ProductItem, Wrapper } from '../components';
import { withRouter } from 'next/router';

class Product extends Component {
    static async getInitialProps(context) {
        const isServer = !!context.req;
        const store = initProductStore(isServer);
        await store.fetchSingleProduct(context.query.slug);
        return {
            products: store.products,
            product: store.product,
            error: store.error,
            isServer,
        };
    }

    constructor(props) {
        super(props);
        this.store = initProductStore(
            props.isServer,
            props.products,
            props.product,
            props.error
        );
    }

    render() {
        return (
            <Wrapper
                title={this.props.product.name}
                description={this.props.product.name}
                ogImage={this.props.product.image}>
                <Provider productStore={this.store}>
                    <div className="card" style={{ paddingTop: `80px` }}>
                        <ProductItem/>
                    </div>
                </Provider>
            </Wrapper>
        );
    }
};

export default Product;