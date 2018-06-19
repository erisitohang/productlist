import React, { Component } from 'react';
import { queryBuild } from '../lib/common';
import Router from 'next/router';
import { initProductStore } from '../store/product';
import { CONST_PRICE } from '../constants';

class Price extends Component {
    static async getInitialProps(context) {
        const isServer = !!context.req;
        return {
            isServer
        };
    }

    constructor(props) {
        super(props);
        this.store = initProductStore(props.isServer);
        this.state = { price: this.store.query.max };
        this.changed = this.changed.bind(this);
    }

    componentDidMount() {
        this.setState({ price: this.store.query.price_max });
    }

    changed(event) {
        this.store.query.price_min = event.currentTarget.dataset.min;
        this.store.query.price_max = event.currentTarget.dataset.max;
        const querString = queryBuild(this.store.query);
        Router.push('/' + querString);
        this.setState({ price: event.currentTarget.dataset.max });
    }

    render() {
        const data = CONST_PRICE.ITEMS;
        return (
            <div>
                <h4>Price</h4>
                {data.map((price, idx) => (
                    <div className="form-check" key={idx}>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="price"
                                   checked={this.state.price == price.max}
                                   value={price.label}
                                   data-min={price.min}
                                   data-max={price.max}
                                   onChange={this.changed}
                            />
                            {price.label}
                        </label>
                    </div>
                ))}
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="price"
                               checked={!this.state.price}
                               onChange={this.changed}
                        />
                        {'All'}
                    </label>
                </div>
            </div>
        );
    }
}

export default Price;
