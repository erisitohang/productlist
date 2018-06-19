import React, { Component } from 'react';
import Router from 'next/router';
import { queryBuild } from '../lib/common';
import { Sorter } from '../utils';
import { initProductStore } from '../store/product';
import { CONST_SHOP } from '../constants';

class Sort extends Component {
    static async getInitialProps(context) {
        const isServer = !!context.req;
        return {
            isServer
        };
    }

    constructor(props) {
        super(props);
        this.store = initProductStore(props.isServer);
        this.state = { value: 'newest' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const sorter = Sorter[event.target.value];
        this.store.query.sort = sorter.sort;
        this.store.query.dir = sorter.dir;
        const queryString = queryBuild(this.store.query);
        Router.push('/' + queryString);
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className={'row'}>
                <div className={'col-md-9'}></div>
                <div className={'col-md-3'}>
                    <div className={'float-right form-inline'}>
                        <div className="form-group" style={{ marginTop: `100px` }}>
                            <label htmlFor="exampleSelect1">Sort: &nbsp;</label>
                            <select className="form-control" id="sortOption" value={this.state.value}
                                    onChange={this.handleChange}>
                                <option value={CONST_SHOP.NEWEST.key}>{CONST_SHOP.NEWEST.label}</option>
                                <option value={CONST_SHOP.LOWEST_PRICE.key}>{CONST_SHOP.LOWEST_PRICE.label}</option>
                                <option value={CONST_SHOP.HIGHEST_PRICE.key}>{CONST_SHOP.HIGHEST_PRICE.label}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sort;
