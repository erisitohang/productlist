import React, { Component } from 'react';
import { initProductStore } from '../store/product';
import { queryBuild } from '../lib/common';
import Router from 'next/router'

class TreeNode extends Component {
    static async getInitialProps(context) {
        const isServer = !!context.req;
        return {
            isServer
        };
    }

    constructor(props) {
        super(props);
        this.store = initProductStore(props.isServer);
        this.setCategory = this.setCategory.bind(this);
    }
    setCategory(event) {
        this.setState({ selectedItem: event.currentTarget.dataset.id });
        this.store.query.cat = event.currentTarget.dataset.id;
        const querString = queryBuild(this.store.query);
        Router.push('/' + querString);
    }
    render() {
        let nodes;
        if (this.props.category) {
            nodes = this.props.category.map((cat) => <TreeNode key={cat.name} node={cat} category={cat.items}/>);
        }
        return (
            <li>
                <span key={this.props.node.name} onClick={this.setCategory} data-id={this.props.node.name}
                      className={'pointer'}
                >  {this.props.node.label}</span>
                <ul>{nodes}</ul>
            </li>
        );

    }
}

export default TreeNode;


