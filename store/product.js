import { observable, action } from 'mobx';
import fetch from 'isomorphic-unfetch';
import { queryBuild } from '../lib/common';

let store = null;

class ProductStore {
    @observable products;
    @observable product;
    @observable paginate;
    @observable error;
    @observable query;

    constructor(isServer, products, product, paginate, error) {
        this.products = products;
        this.product = product;
        this.paginate = paginate;
        this.query = {
            page: 1,
            sort: 'newest',
            dir: 'desc',
            cat: '',
            price_min: null,
            price_max: 0
        };
        this.error = error;
    };
    @action setQuery = async (query) => {
        this.query = query;
    };
    @action fetchProducts = async () => {
        const queryString = queryBuild(this.query);
        try {
            const data = await fetch(`http://localhost:3000/api/v1/products${queryString}`);
            const { products, paginate } = await data.json();
            this.products = products;
            this.paginate = paginate;
        } catch (error) {
            this.error = error;
        }
    };
    @action fetchSingleProduct = async (slug) => {
        if (!this.products.length) {
            try {
                const data = await fetch(`http://localhost:3000/api/v1/products/${slug}`);
                this.product = await data.json();
            } catch (error) {
                this.error = error;
            }
        } else {
            this.product = await Promise.resolve(this.products.filter(product => slug === product.slug)[0]);
        }
    };
}

export function initProductStore(isServer, products = [], product = {}, paginate = {}, error = '') {
    if (isServer && typeof window === 'undefined') {
        return new ProductStore(isServer, products, product, paginate, error);
    } else {
        if (store === null) {
            store = new ProductStore(isServer, products, product, paginate, error);
        }
        return store;
    }
}

export default new ProductStore;