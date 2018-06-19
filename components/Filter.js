import React, { Component } from 'react';
import Category from './Category';
import Price from './Price';
import { initProductStore } from '../store/product';

class Filter extends Component {
    static async getInitialProps({ req }) {
        const isServer = !!req;
        initProductStore(isServer);
    }

    constructor(props) {
        super(props);
        this.store = initProductStore();
    }

    render() {
        return (
            <div>
                <Category/>
                <Price/>
            </div>
        );
    }
}

export default Filter;
